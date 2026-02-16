import React from 'react';

const CDOTLogo = ({ className = "h-12" }) => {
    // Simple representation of Chicago Star (6 points)
    const Star = ({ cx, cy }) => (
        <path
            d={`M ${cx} ${cy - 10} L ${cx + 2.5} ${cy - 3} L ${cx + 9} ${cy - 3} L ${cx + 4} ${cy + 2} L ${cx + 6} ${cy + 9} L ${cx} ${cy + 5} L ${cx - 6} ${cy + 9} L ${cx - 4} ${cy + 2} L ${cx - 9} ${cy - 3} L ${cx - 2.5} ${cy - 3} Z`}
            fill="#bd2d2d"
        />
    );

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="flex flex-col items-center justify-center bg-white p-1 rounded-sm shadow-sm h-10 w-10 border border-slate-200">
                {/* Simplified single star logo icon context */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <Star cx={12} cy={12} />
                </svg>
            </div>
            <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">CDOT</span>
                <span className="text-blue-100 text-[10px] uppercase tracking-wider font-semibold">Chicago Department of Transportation</span>
            </div>
        </div>
    );
};

export default CDOTLogo;
