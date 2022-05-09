import React from "react";

import mdPDF from '../assets/md.pdf'



export default function Multihealing1() {
  
  
return (
    <div className="h-screen">
      <iframe src={`${mdPDF}#view=fitH`} title="testPdf" height="100%" width="100%"/>

    </div>
    
  );
}