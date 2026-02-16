import React from 'react';
import StatCard from './StatCard';
import { Info } from 'lucide-react';

const OverviewPanel = ({ corridor, crashData }) => {
  if (!corridor) return <div className="panel">Select a corridor</div>;

  const totalCrashes = crashData.length;
  // Simple calculations for now
  const fatal = crashData.filter(c => c.severity === 'Fatal').length;
  const severe = crashData.filter(c => c.severity === 'Incapacitating Injury').length;
  const ksi = fatal + severe;

  return (
    <div className="panel h-full flex flex-col">
      <div className="panel-header flex justify-between items-center shrink-0">
        <h2>Corridor Overview</h2>
      </div>

      <div className="panel-content flex-1 flex flex-col">
        {/* Top Section: Title & Tags */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-primary mb-1 leading-tight">{corridor.name}</h3>
          <p className="text-sm text-slate-500 font-medium mb-4">{corridor.limits}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded border border-slate-200 font-semibold uppercase tracking-wider">
              {corridor.classification}
            </span>
            {corridor.tags.map(tag => (
              <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-800 text-xs rounded border border-blue-100 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex-1 space-y-3">
          <StatCard label="Corridor Length" value={corridor.length} />
          <StatCard
            label="KSI (Killed/Severe)"
            value={ksi}
            type="danger"
            subtext="Total observed in selected period"
          />
        </div>

        {/* Footer: Data Source */}
        <div className="mt-auto pt-4 border-t border-slate-100 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Info size={12} />
            <span>Source: CDOT Street Centerlines & Roadway Inventory</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;
