import React from 'react';

export const SafetyPanel = () => (
    <div className="panel">
        <div className="panel-header">
            <h2>Safety Summary</h2>
        </div>
        <div className="panel-content">
            <p className="text-muted text-sm italic">Detailed charts coming soon...</p>
            {/* Placeholder for Recharts */}
            <div style={{ height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                Chart Placeholder
            </div>
        </div>
    </div>
);

export const NetworkPanel = () => (
    <div className="panel">
        <div className="panel-header">
            <h2>Network Context</h2>
        </div>
        <div className="panel-content">
            <p className="text-muted text-sm italic">Network connectivity analysis...</p>
        </div>
    </div>
);
