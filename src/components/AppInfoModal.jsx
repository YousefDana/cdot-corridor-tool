import React from 'react';
import { X, ExternalLink, Database, Info, Shield, Layers, MapPin } from 'lucide-react';

const AppInfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="info-modal-overlay" onClick={onClose}>
            {/* Modal Container */}
            <div className="info-modal-card" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="info-modal-header">
                    <div className="flex items-center gap-3">
                        <div className="header-icon-wrapper">
                            <Info size={24} strokeWidth={2} />
                        </div>
                        <div>
                            <h2 className="header-title-text">Corridor Safety Snapshot</h2>
                            <p className="header-subtitle-text">About This Tool</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="modal-close-btn"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content Scrollable */}
                <div className="info-modal-content">

                    {/* Mission Statement */}
                    <div className="mission-box">
                        <Shield className="mission-icon" size={20} />
                        <div>
                            <h3 className="mission-title">Decision Support Context</h3>
                            <p className="mission-text">
                                This dashboard is an internal rapid-response tool for CDOT. It consolidates crash data, roadway inventory, and bikeway network status into a single "Corridor Snapshot" to support safety reviews, Vision Zero prioritization, and grant applications.
                            </p>
                        </div>
                    </div>

                    {/* Data Sources Grid */}
                    <section>
                        <h3 className="section-title">
                            <Database size={14} /> Data Intelligence
                        </h3>
                        <div className="source-grid">

                            {/* Card 1: Safety */}
                            <a
                                href="https://data.cityofchicago.org/Transportation/Traffic-Crashes-Crashes/85ca-t3if"
                                target="_blank"
                                rel="noreferrer"
                                className="source-card group"
                            >
                                <div className="source-header">
                                    <div className="dot-indicator dot-danger"></div>
                                    <h4 className="source-name group-hover:text-secondary transition-colors">Crash Data</h4>
                                    <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                                </div>
                                <p className="source-desc">
                                    Aggregated dataset of IDOT traffic crashes (2019–2023). Filtered for severity and mode.
                                </p>
                                <div className="tag-container">
                                    <span className="tag tag-amber">Pedestrian</span>
                                    <span className="tag tag-blue">Bicycle</span>
                                </div>
                            </a>

                            {/* Card 2: Network */}
                            <a
                                href="https://data.cityofchicago.org/Transportation/Bike-Routes/3w5d-sru8"
                                target="_blank"
                                rel="noreferrer"
                                className="source-card group"
                            >
                                <div className="source-header">
                                    <div className="dot-indicator dot-success"></div>
                                    <h4 className="source-name group-hover:text-secondary transition-colors">Corridor Network</h4>
                                    <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                                </div>
                                <p className="source-desc">
                                    Current facility types and identified gaps derived from the 2023 Chicago Cycling Strategy.
                                </p>
                                <div className="source-meta">
                                    <Layers size={12} />
                                    <span>CDOT Geospatial Data</span>
                                </div>
                            </a>

                            {/* Card 3: Inventory */}
                            <a
                                href="https://data.cityofchicago.org/Transportation/Street-Center-Lines/6imu-meau"
                                target="_blank"
                                rel="noreferrer"
                                className="source-card group"
                            >
                                <div className="source-header">
                                    <div className="dot-indicator dot-secondary"></div>
                                    <h4 className="source-name group-hover:text-secondary transition-colors">Physical Inventory</h4>
                                    <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                                </div>
                                <p className="source-desc">
                                    Centerline geometry, jurisdiction, functional classification, and signalized intersections.
                                </p>
                                <div className="source-meta">
                                    <MapPin size={12} />
                                    <span>Street Centerlines</span>
                                </div>
                            </a>

                        </div>
                    </section>

                    {/* Methodology List */}
                    <section>
                        <h3 className="section-title">Methodology Notes</h3>
                        <div className="method-list">
                            <div className="method-item">
                                <span className="method-label">KSI Metrics</span>
                                <span className="method-desc">Sum of Fatal (K) and Incapacitating Injury (A) crashes. Used to identify "High Injury" corridors.</span>
                            </div>
                            <div className="method-item">
                                <span className="method-label">Gap Analysis</span>
                                <span className="method-desc">Corridors classified as "Major Arterials" lacking physical separation are automatically flagged as High Stress Gaps.</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="info-modal-footer">
                    <span>Version 1.0.2 (Build 2023.11)</span>
                    <a
                        href="https://data.cityofchicago.org"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        Chicago Data Portal <ExternalLink size={12} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppInfoModal;
