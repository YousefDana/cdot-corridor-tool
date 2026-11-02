import React, { useState } from 'react';
import { X, Table, Database, Activity, GitBranch, AlertTriangle, LayoutDashboard, Map, FileJson, ChevronLeft, ChevronRight } from 'lucide-react';

const DataDebugModal = ({ isOpen, onClose, corridor, crashData, networkData, onNext, onPrev }) => {
    if (!isOpen) return null;

    // Helper for Source Badges
    const SourceBadge = ({ type }) => {
        const styles = {
            'STATIC': 'bg-slate-100 text-slate-600 border-slate-200',
            'RAW API': 'bg-blue-50 text-blue-700 border-blue-200',
            'COMPUTED': 'bg-purple-50 text-purple-700 border-purple-200',
            'DERIVED': 'bg-amber-50 text-amber-700 border-amber-200',
        };
        return (
            <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${styles[type] || styles['STATIC']}`}>
                {type}
            </span>
        );
    };

    // Helper for Target Badges
    const TargetBadge = ({ panel }) => {
        const icons = {
            'Overview': <LayoutDashboard size={10} />,
            'Map': <Map size={10} />,
            'Safety': <Activity size={10} />,
            'Network': <GitBranch size={10} />,
            'General': <Database size={10} />,
        };
        return (
            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                {icons[panel] || <Database size={10} />}
                <span>{panel} Panel</span>
            </div>
        );
    };

    return (
        <div className="info-modal-overlay" onClick={onClose}>
            <div className="info-modal-card" style={{ maxWidth: '95vw', maxHeight: '95vh', width: '1200px' }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="info-modal-header bg-slate-800 text-white border-b-slate-700 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-amber-500/20 text-amber-400 p-2 rounded">
                            <Table size={24} strokeWidth={2} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold font-mono tracking-tight text-white">QC Data Inspector</h2>
                            <p className="text-xs text-slate-400 font-mono">Traceability Matrix & Raw Data View • {corridor?.name}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Navigation */}
                        <div className="flex items-center gap-1 bg-slate-700 rounded p-1 mr-4">
                            <button onClick={onPrev} className="p-1 hover:bg-slate-600 rounded text-slate-300 hover:text-white" title="Previous Corridor">
                                <ChevronLeft size={18} />
                            </button>
                            <button onClick={onNext} className="p-1 hover:bg-slate-600 rounded text-slate-300 hover:text-white" title="Next Corridor">
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        <button onClick={onClose} className="text-slate-400 hover:text-white hover:bg-white/10 p-1 rounded transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="info-modal-content bg-slate-50 font-mono text-xs overflow-auto p-4 flex flex-col gap-6">

                    {/* TOP SECTION: CONTEXT + NETWORK */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* 1. CORRIDOR METADATA */}
                        <div className="border bg-white rounded shadow-sm">
                            <div className="px-4 py-2 border-b bg-slate-50 flex justify-between items-center">
                                <div className="flex items-center gap-2 font-bold text-slate-600">
                                    <Database size={14} /> CORRIDOR CONFIGURATION
                                </div>
                                <span className="text-[10px] text-slate-400">Source: src/data/mockData.js</span>
                            </div>
                            <table className="w-full text-left">
                                <thead className="bg-slate-50/50 border-b">
                                    <tr>
                                        <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">FIELD</th>
                                        <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">VALUE</th>
                                        <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">TARGET UI COMPONENT</th>
                                        <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">TYPE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b last:border-0 hover:bg-slate-50">
                                        <td className="px-3 py-2 text-slate-500">name</td>
                                        <td className="px-3 py-2 font-bold text-slate-700">{corridor?.name}</td>
                                        <td className="px-3 py-2"><TargetBadge panel="Overview" /></td>
                                        <td className="px-3 py-2"><SourceBadge type="STATIC" /></td>
                                    </tr>
                                    <tr className="border-b last:border-0 hover:bg-slate-50">
                                        <td className="px-3 py-2 text-slate-500">limits</td>
                                        <td className="px-3 py-2 font-bold text-slate-700">{corridor?.limits}</td>
                                        <td className="px-3 py-2"><TargetBadge panel="Overview" /></td>
                                        <td className="px-3 py-2"><SourceBadge type="STATIC" /></td>
                                    </tr>
                                    <tr className="border-b last:border-0 hover:bg-slate-50">
                                        <td className="px-3 py-2 text-slate-500">length</td>
                                        <td className="px-3 py-2 font-bold text-slate-700">{corridor?.length}</td>
                                        <td className="px-3 py-2"><TargetBadge panel="Overview" /></td>
                                        <td className="px-3 py-2"><SourceBadge type="STATIC" /></td>
                                    </tr>
                                    <tr className="border-b last:border-0 hover:bg-slate-50">
                                        <td className="px-3 py-2 text-slate-500">center/zoom</td>
                                        <td className="px-3 py-2 font-bold text-slate-700">[{corridor?.center.join(', ')}] z{corridor?.zoom}</td>
                                        <td className="px-3 py-2"><TargetBadge panel="Map" /></td>
                                        <td className="px-3 py-2"><SourceBadge type="STATIC" /></td>
                                    </tr>
                                    <tr className="border-b last:border-0 hover:bg-slate-50">
                                        <td className="px-3 py-2 text-slate-500">tags</td>
                                        <td className="px-3 py-2 font-bold text-slate-700">{corridor?.tags.join(', ')}</td>
                                        <td className="px-3 py-2"><TargetBadge panel="Overview" /></td>
                                        <td className="px-3 py-2"><SourceBadge type="STATIC" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 2. NETWORK DATA */}
                        <div className="border bg-white rounded shadow-sm flex flex-col">
                            <div className="px-4 py-2 border-b bg-slate-50 flex justify-between items-center">
                                <div className="flex items-center gap-2 font-bold text-slate-600">
                                    <GitBranch size={14} /> NETWORK ANALYSIS
                                </div>
                                <span className="text-[10px] text-slate-400">Source: GIS Extract (Chicago Data Portal)</span>
                            </div>

                            <div className="flex-1 overflow-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50/50 border-b">
                                        <tr>
                                            <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">CATEGORY</th>
                                            <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">DATA ENTRY</th>
                                            <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">TARGET UI</th>
                                            <th className="px-3 py-2 text-[10px] text-slate-400 font-medium">STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {networkData?.bikeways?.map((item, i) => (
                                            <tr key={`bike-${i}`} className="border-b last:border-0 hover:bg-slate-50">
                                                <td className="px-3 py-2 text-slate-500">Bikeway</td>
                                                <td className="px-3 py-2 text-slate-700">
                                                    <div className="font-bold">{item.type}</div>
                                                    <div className="text-[10px] text-slate-400">Coverage: {item.pct}</div>
                                                </td>
                                                <td className="px-3 py-2"><TargetBadge panel="Network" /></td>
                                                <td className="px-3 py-2">
                                                    <SourceBadge type="RAW API" />
                                                </td>
                                            </tr>
                                        ))}
                                        {networkData?.connections?.map((item, i) => (
                                            <tr key={`conn-${i}`} className="border-b last:border-0 hover:bg-slate-50">
                                                <td className="px-3 py-2 text-slate-500">Connection</td>
                                                <td className="px-3 py-2 text-slate-700 font-bold">{item}</td>
                                                <td className="px-3 py-2"><TargetBadge panel="Network" /></td>
                                                <td className="px-3 py-2"><SourceBadge type="RAW API" /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM SECTION: CRASH DATA */}
                    <div className="border bg-white rounded shadow-sm flex flex-col flex-1 min-h-0">
                        <div className="px-4 py-2 border-b bg-slate-50 flex justify-between items-center sticky top-0 z-10">
                            <div className="flex items-center gap-2 font-bold text-slate-600">
                                <Activity size={14} /> CRASH DATASET (CITY OF CHICAGO 2019-2023)
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-[10px]">
                                    <span className="text-slate-400">Aggregates Used In:</span>
                                    <TargetBadge panel="Safety" />
                                    <TargetBadge panel="Overview" />
                                </div>
                                <span className="text-[10px] bg-slate-200 px-2 py-1 rounded text-slate-600 font-bold">
                                    {crashData.length} RECORDS LOADED
                                </span>
                            </div>
                        </div>

                        <div className="overflow-auto max-h-[400px]">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 sticky top-0 shadow-sm z-10 border-b">
                                    <tr>
                                        {['ID', 'Year', 'Mode', 'Severity', 'Location', 'Coordinates', 'Used In'].map(h => (
                                            <th key={h} className="px-3 py-2 text-[10px] text-slate-500 font-bold uppercase whitespace-nowrap bg-slate-50">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {crashData.map((row, idx) => (
                                        <tr key={row.id} className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'} hover:bg-blue-50/50`}>
                                            <td className="px-3 py-2 text-slate-400 border-r">{row.id}</td>
                                            <td className="px-3 py-2 font-bold text-slate-700 border-r">{row.year}</td>
                                            <td className="px-3 py-2 border-r">
                                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${row.mode === 'Pedestrian' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
                                                    {row.mode}
                                                </span>
                                            </td>
                                            <td className="px-3 py-2 border-r">
                                                <span className={`px-1.5 py-0.5 rounded text-[10px] truncate block w-fit ${row.severity === 'Fatal' || row.severity.includes('Incap') ? 'bg-red-50 text-red-700 font-bold border border-red-100' : 'text-slate-600'}`}>
                                                    {row.severity}
                                                </span>
                                            </td>
                                            <td className="px-3 py-2 text-slate-600 border-r truncate max-w-[150px]" title={row.location}>
                                                {row.location}
                                            </td>
                                            <td className="px-3 py-2 text-slate-400 text-[10px] border-r">
                                                {row.lat.toFixed(4)}, {row.lng.toFixed(4)}
                                            </td>
                                            <td className="px-3 py-2">
                                                <div className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Map Pin"></span>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Trend Chart"></span>
                                                    {(row.severity === 'Fatal' || row.severity.includes('Incap')) && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" title="KSI Metric"></span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataDebugModal;
