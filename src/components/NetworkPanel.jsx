import React from 'react';
import { Network, AlertTriangle, Info } from 'lucide-react';
import StatCard from './StatCard';

const NetworkPanel = ({ networkData }) => {
    // Fallback if data is missing
    const { bikeways = [], connections = [], highCrashIntersections = [] } = networkData || {};

    return (
        <div className="panel h-full flex flex-col" style={{ gridColumn: 'span 1' }}>
            <div className="panel-header shrink-0">
                <h2>Network Context</h2>
            </div>

            <div className="panel-content flex-1 flex flex-col space-y-6">

                {/* Bikeway Network Status */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Network size={16} className="text-slate-400" />
                        <h3 className="text-sm font-bold text-slate-700 uppercase">Corridor Facilities</h3>
                    </div>
                    <div className="space-y-3">
                        {bikeways.map((b, i) => (
                            <div key={i} className="stat-card p-3 flex justify-between items-center mb-0 shadow-sm"
                                style={{ borderLeft: b.status === 'Gap' ? '4px solid #d97706' : '4px solid #15803d', background: '#f9fafb', borderRadius: '4px' }}>
                                <div>
                                    <div className="text-sm font-bold text-slate-800">{b.type}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mt-0.5">{b.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Connectivity */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase mb-3">Key Connections</h3>
                    <div className="flex flex-col gap-2">
                        {connections.map(c => (
                            <div key={c} className="text-sm text-slate-600 bg-slate-50 px-3 py-2 rounded border border-slate-100">
                                {c}
                            </div>
                        ))}
                    </div>
                </div>

                {/* High Crash Intersections */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 mt-2">
                        <AlertTriangle size={16} className="text-amber-500" />
                        <h3 className="text-sm font-bold text-slate-700 uppercase">High Crash Intersections</h3>
                    </div>
                    <div className="border border-slate-200 rounded overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 bg-slate-50 uppercase border-b border-slate-200">
                                <tr>
                                    <th className="px-3 py-2 font-semibold">Location</th>
                                    <th className="px-3 py-2 text-right font-semibold">Total</th>
                                    <th className="px-3 py-2 text-right font-semibold">KSI</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {highCrashIntersections.map((int, i) => (
                                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                                        <td className="px-3 py-2 font-medium text-slate-700 text-xs">{int.name}</td>
                                        <td className="px-3 py-2 text-right text-xs text-slate-600">{int.crashes}</td>
                                        <td className="px-3 py-2 text-right text-xs font-bold text-red-700">{int.ksi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                        <Info size={12} />
                        <span>Source: CDOT Active Transportation Plan</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NetworkPanel;
