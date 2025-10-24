import React from 'react';
import logoImg from '../assets/brand.png';
export default function Sidebar({collapsed, setCollapsed}){
  return (
    <aside className="sidebar">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div className="logo" style={{alignItems:'center'}}>
          <img src={logoImg} alt="logo"/>
          <div style={{minWidth:0}}>
            <div className="brand-title">Promage</div>
            <div className="brand-sub">Project manager</div>
          </div>
        </div>
        <button className="toggle-btn" onClick={()=>setCollapsed(s=>!s)} aria-label="Toggle sidebar">{collapsed? '→':'←'}</button>
      </div>
      <button className="create-btn" title="Create new project">+ Create new</button>
      <nav className="nav" aria-label="Main navigation">
        <a className="active"><span className="chip">D</span><span className="label">Dashboard</span></a>
        <a><span className="chip">P</span><span className="label">Projects</span></a>
        <a><span className="chip">T</span><span className="label">Tasks</span></a>
        <a><span className="chip">R</span><span className="label">Reports</span></a>
      </nav>
      <div className="help">Need help? <br/><strong>Contact us</strong></div>
    </aside>
  );
}
