import React from 'react';

const MapLegend = () => {
    return (
        <div className="absolute bottom-6 right-6 bg-white p-4 rounded-md shadow-lg border border-slate-200 text-xs z-[1000] min-w-[140px]">
            <h4 className="font-bold text-slate-700 mb-3 uppercase tracking-wide border-b border-slate-100 pb-1">Map Legend</h4>

            <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#bd2d2d] border border-white shadow-sm ring-1 ring-red-100"></div>
                    <span className="text-slate-700 font-medium">Fatal / Severe</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#d97706] border border-white shadow-sm ring-1 ring-orange-100"></div>
                    <span className="text-slate-700 font-medium">Pedestrian</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#3b8c99] border border-white shadow-sm ring-1 ring-teal-100"></div>
                    <span className="text-slate-700 font-medium">Bicycle</span>
                </div>
            </div>
        </div>
    );
};

export default MapLegend;
