import React from "react";
import spPDF from '../assets/sp.pdf'



export default function Soulplan() {
  
  
return (
    <div className="h-screen">
      <iframe src={`${spPDF}#view=fitH`} title="testPdf" height="100%" width="100%"/>
    </div>
    
  );
}