import './App.css';
import React,{useState} from 'react';
// import {QRCodeCanvas,QRCodeSVG} from 'qrcode.react'
import QRCode from 'qrcode.react';

function App() {
  const [qrcode,setQrcode] = useState(null);
  
  const handleqr=(e)=>{
    setQrcode(e.target.value)
  }

  return (
    <div className="App">
     <h1>QRcode</h1>
     <input type="text" onChange={handleqr} value={qrcode}/>
     <div style={{marginTop:'20px'}}>
      {/* <QRCodeCanvas value={qrcode}/>
      <QRCodeSVG value={qrcode}/> */}
      <QRCode value={qrcode}/>
     </div>
    </div>
  );
}

export default App;
