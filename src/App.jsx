import React, { useState, useRef } from 'react';
import { CORRIDORS, CRASH_DATA, NETWORK_DATA } from './data/mockData';
import OverviewPanel from './components/OverviewPanel';
import MapPanel from './components/MapPanel';
import SafetyPanel from './components/SafetyPanel';
import NetworkPanel from './components/NetworkPanel';
import CDOTLogo from './components/CDOTLogo'; // Import Logo
import { Info, Download, Table } from 'lucide-react'; // Restored Download, Added Table
import html2canvas from 'html2canvas'; // Restored
import { jsPDF } from 'jspdf'; // Restored
import AppInfoModal from './components/AppInfoModal';
import DataDebugModal from './components/DataDebugModal';

function App() {
  const [selectedCorridorId, setSelectedCorridorId] = useState(CORRIDORS[0].id);
  const [showInfo, setShowInfo] = useState(false);
  const [showDebug, setShowDebug] = useState(false); // State for QC Modal
  const dashboardRef = useRef(null);

  const selectedCorridor = CORRIDORS.find(c => c.id === selectedCorridorId);

  // Filter data based on corridor
  const corridorCrashes = CRASH_DATA.filter(c => c.corridorId === selectedCorridorId);
  const corridorNetwork = NETWORK_DATA[selectedCorridorId] || { bikeways: [], connections: [], highCrashIntersections: [] };

  // Helper to switch corridors from QC Modal
  const handleCorridorChange = (direction) => {
    const currentIndex = CORRIDORS.findIndex(c => c.id === selectedCorridorId);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    // Wrap around
    if (newIndex >= CORRIDORS.length) newIndex = 0;
    if (newIndex < 0) newIndex = CORRIDORS.length - 1;

    setSelectedCorridorId(CORRIDORS[newIndex].id);
  };

  const handleExport = async () => {
    if (!dashboardRef.current) return;

    // Simple visual feedback
    const btn = document.getElementById('export-btn');
    if (btn) btn.innerHTML = 'Generating...';

    try {
      const canvas = await html2canvas(dashboardRef.current, {
        scale: 2, // Higher resolution
        useCORS: true,
        ignoreElements: (element) => element.classList.contains('leaflet-control-zoom') // Hide zoom controls
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape A4
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Scale image to fit page
      const imgProps = pdf.getImageProperties(imgData);
      const ratio = imgProps.width / imgProps.height;
      let imgWidth = pdfWidth;
      let imgHeight = pdfWidth / ratio;

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * ratio;
      }

      // Center it
      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save(`${selectedCorridor.name}_Snapshot.pdf`);
    } catch (err) {
      console.error("Export failed:", err);
      alert("Failed to export PDF. See console.");
    } finally {
      if (btn) btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> Export Snapshot';
    }
  };

  return (
    <div className="app-container" ref={dashboardRef}>
      {/* Header */}
      <header className="dashboard-header gap-6">
        <CDOTLogo />
        <div className="header-title border-l border-white/20 pl-6">
          <h1>Corridor Safety and Network Context Snapshot</h1>
          <p>Existing Conditions and Safety Context for Vision Zero, Bicycle, and Pedestrian Planning</p>
        </div>

        <div className="flex items-center gap-4 hidden md:flex">
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* QC Button */}
            <button
              onClick={() => setShowDebug(true)}
              className="text-amber-200/80 hover:text-amber-300 hover:bg-white/10 p-2 rounded-full transition-colors"
              title="QC Data Inspector"
              data-html2canvas-ignore="true"
            >
              <Table size={20} />
            </button>

            <button
              onClick={() => setShowInfo(true)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              title="About this tool"
              data-html2canvas-ignore="true"
            >
              <Info size={20} />
            </button>
            <div className="h-6 w-px bg-white/20 mx-1"></div>
            <select
              className="search-select"
              value={selectedCorridorId}
              onChange={(e) => setSelectedCorridorId(e.target.value)}
              data-html2canvas-ignore="true"
            >
              {CORRIDORS.map(c => (
                <option key={c.id} value={c.id}>{c.name} ({c.limits})</option>
              ))}
            </select>

            <button
              id="export-btn"
              className="btn-export"
              onClick={handleExport}
              data-html2canvas-ignore="true"
            >
              <Download size={16} />
              Export Snapshot
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="dashboard-grid">
        <OverviewPanel corridor={selectedCorridor} crashData={corridorCrashes} />
        <SafetyPanel corridor={selectedCorridor} crashData={corridorCrashes} />
        <MapPanel corridor={selectedCorridor} crashData={corridorCrashes} />
        <NetworkPanel networkData={corridorNetwork} />
      </main>

      <AppInfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
      <DataDebugModal
        isOpen={showDebug}
        onClose={() => setShowDebug(false)}
        corridor={selectedCorridor}
        crashData={corridorCrashes}
        networkData={corridorNetwork}
        onNext={() => handleCorridorChange('next')}
        onPrev={() => handleCorridorChange('prev')}
      />
    </div>
  );
}

export default App;
