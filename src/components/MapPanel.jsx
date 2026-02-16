import React, { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapLegend from './MapLegend';

// Component to handle map view updates when corridor changes
function MapController({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
        map.invalidateSize();
    }, [center, zoom, map]);
    return null;
}

const MapPanel = ({ corridor, crashData }) => {
    if (!corridor) return <div className="panel">Loading Map...</div>;

    return (
        <div className="panel relative" style={{ gridColumn: 'span 1' }}>
            <div className="panel-header">
                <h2>Map View</h2>
            </div>
            <div className="panel-content map-panel-content relative">
                <MapLegend />
                <MapContainer
                    center={corridor.center}
                    zoom={corridor.zoom}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />

                    <MapController center={corridor.center} zoom={corridor.zoom} />

                    {/* Corridor Geometry (Linework) */}
                    {corridor.path && (
                        <Polyline
                            positions={corridor.path}
                            pathOptions={{ color: '#3b82f6', weight: 6, opacity: 0.6, lineCap: 'round', lineJoin: 'round' }}
                        />
                    )}

                    {/* Render Crash Points with CircleMarkers */}
                    {crashData.map((crash) => {
                        const isPed = crash.mode === 'Pedestrian';
                        const isFatal = crash.severity === 'Fatal' || crash.severity === 'Incapacitating Injury';

                        // Style logic
                        const color = isPed ? '#d97706' : '#1e293b'; // Ped = Amber, Bike = Dark Slate (Header)
                        const fillColor = isFatal ? '#bd2d2d' : color; // Fatal overrides to Red
                        const radius = isFatal ? 8 : 5;
                        const opacity = 0.8;

                        return (
                            <CircleMarker
                                key={crash.id}
                                center={[crash.lat, crash.lng]}
                                radius={radius}
                                pathOptions={{
                                    color: 'white',
                                    weight: 1,
                                    fillColor: fillColor,
                                    fillOpacity: opacity
                                }}
                            >
                                <Popup>
                                    <div className="text-sm">
                                        <strong className="block mb-1 border-b pb-1">{crash.location}</strong>
                                        <div className="grid grid-cols-2 gap-x-2 text-xs">
                                            <span className="text-gray-500">Mode:</span>
                                            <span className="font-medium">{crash.mode}</span>

                                            <span className="text-gray-500">Severity:</span>
                                            <span className={isFatal ? 'text-red-700 font-bold' : 'font-medium'}>{crash.severity}</span>

                                            <span className="text-gray-500">Year:</span>
                                            <span>{crash.year}</span>
                                        </div>
                                    </div>
                                </Popup>
                            </CircleMarker>
                        );
                    })}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapPanel;
