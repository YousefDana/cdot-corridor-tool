import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line
} from 'recharts';
import StatCard from './StatCard';
import { Info } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border border-slate-200 shadow-md rounded text-sm">
                <p className="font-bold text-slate-800">{label}</p>
                {payload.map((entry, index) => (
                    <div key={index} style={{ color: entry.color }} className="text-xs">
                        {entry.name}: {entry.value}
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const SafetyPanel = ({ corridor, crashData }) => {
    if (!corridor) return null;

    // Process data for charts
    // 1. Severity by Mode
    const pedCrashes = crashData.filter(c => c.mode === 'Pedestrian');
    const bikeCrashes = crashData.filter(c => c.mode === 'Bicycle');

    // ... [Logic for aggregation stays same] ...
    const dataBySeverity = [
        { name: 'Fatal', Pedestrian: 0, Bicycle: 0, amt: 0 },
        { name: 'Incapacitating', Pedestrian: 0, Bicycle: 0, amt: 0 },
        { name: 'Non-Incap', Pedestrian: 0, Bicycle: 0, amt: 0 },
        { name: 'Possible/No Inj', Pedestrian: 0, Bicycle: 0, amt: 0 },
    ];

    crashData.forEach(c => {
        let severityIndex = 3;
        if (c.severity === 'Fatal') severityIndex = 0;
        else if (c.severity === 'Incapacitating Injury') severityIndex = 1;
        else if (c.severity === 'Non-Incapacitating') severityIndex = 2;

        // Increment
        if (c.mode === 'Pedestrian') dataBySeverity[severityIndex].Pedestrian += 1;
        if (c.mode === 'Bicycle') dataBySeverity[severityIndex].Bicycle += 1;
    });

    // 2. Trend Data (Dynamic Aggregation with Zero-Fill for 2019-2023)
    const years = [2019, 2020, 2021, 2022, 2023];
    const trendData = years.map(year => {
        const yearCrashes = crashData.filter(c => c.year === year);
        const ped = yearCrashes.filter(c => c.mode === 'Pedestrian').length;
        const bike = yearCrashes.filter(c => c.mode === 'Bicycle').length;
        return { year, Pedestrian: ped, Bicycle: bike };
    });

    return (
        <div className="panel h-full flex flex-col" style={{ gridColumn: 'span 1' }}>
            <div className="panel-header shrink-0">
                <h2>Safety Summary (Existing Data)</h2>
            </div>

            <div className="panel-content flex-1 flex flex-col">

                {/* Top Level KPIs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <StatCard label="Ped Crashes" value={pedCrashes.length} type="accent" />
                    <StatCard label="Bike Crashes" value={bikeCrashes.length} type="accent" />
                </div>

                {/* Severity Chart */}
                <div style={{ height: '200px' }} className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Severity by Mode</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="horizontal"
                            data={dataBySeverity}
                            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                            barSize={32}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} interval={0} />
                            <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
                            <Legend iconSize={8} wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                            <Bar dataKey="Pedestrian" stackId="a" fill="var(--color-accent-2)" radius={[0, 0, 0, 0]} />
                            <Bar dataKey="Bicycle" stackId="a" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Trend Chart */}
                <div style={{ height: '180px' }} className="mb-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">5-Year Trend</h4>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={trendData}
                            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="Bicycle" stroke="var(--color-primary)" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                            <Line type="monotone" dataKey="Pedestrian" stroke="var(--color-accent-2)" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                        <Info size={12} />
                        <span>Source: IDOT Crash Data (2019-2023)</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SafetyPanel;
