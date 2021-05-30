import React from 'react';

const colors = [
  '#e27d60',
  '#85cdcb',
  '#e8a87c',
  '#c38d9e',
  '#41b3a3',
  '#242582',
  '#553D67',
  '#F64C72',
  '#99738E',
  '#2F2FA2',
  '#8D8741',
  '#659DBD',
  '#DAAD86',
  '#BC986A',
  '#FBEEC1',
  '#FC4445',
  '#CAFAFE',
  '#907163',
  '#379683',
  '#EDF5E1',
  '#379683',
  '#41b3a3',
];

if (typeof window !== 'undefined') {
  for (let i = 1; i < 21; i++) {
    let a = document.querySelector(`.circle-container:nth-child(${i})`);
    a.style.color = colors[i];
  }
}

function Bubles({}) {
  return (
    <div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Bubles;
