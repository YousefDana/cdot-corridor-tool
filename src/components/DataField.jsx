import React from 'react';

const DataField = ({ label, value, className = '', highlight = false }) => {
    return (
        <div className={`flex flex-col border border-slate-200 rounded-md bg-white overflow-hidden shadow-sm ${className}`}>
            <div className="bg-slate-50 px-3 py-1.5 border-b border-slate-100">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>
            </div>
            <div className={`px-3 py-2 text-sm font-medium ${highlight ? 'text-blue-700 bg-blue-50/50' : 'text-slate-800'}`}>
                {value}
            </div>
        </div>
    );
};

export default DataField;
