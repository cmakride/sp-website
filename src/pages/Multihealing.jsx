import React from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css'

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import mdPDF from '../assets/md.pdf'



export default function AllPages() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  
return (
    
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <Viewer fileUrl={mdPDF}
        plugins={[defaultLayoutPluginInstance]}></Viewer>
      </Worker>
      </div>
  );
}