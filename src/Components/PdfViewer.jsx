// PdfViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PdfViewer({ pdfUrl }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: '750px' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
}

export default PdfViewer;
