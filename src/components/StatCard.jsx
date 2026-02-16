import React from 'react';

const StatCard = ({ label, value, subtext, type = 'default', className = '' }) => {
    const borderColors = {
        default: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        amber: 'var(--color-accent-2)',
    };

    const textColors = {
        default: 'var(--color-primary)',
        danger: 'var(--color-danger)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        amber: 'var(--color-accent-2)',
    };

    return (
        <div
            className={`stat-card ${className}`}
            style={{
                borderLeft: `4px solid ${borderColors[type] || borderColors.default}`,
                background: '#f9fafb',
                padding: '0.75rem',
                borderRadius: '4px',
                marginBottom: '0.75rem'
            }}
        >
            <div
                className="stat-value"
                style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: textColors[type] || textColors.default
                }}
            >
                {value}
            </div>
            <div
                className="stat-label"
                style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontWeight: '600'
                }}
            >
                {label}
            </div>
            {subtext && <div className="text-xs text-muted mt-1">{subtext}</div>}
        </div>
    );
};

export default StatCard;
