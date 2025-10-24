import React from 'react';
export default function Header(){
  return (
    <header className="header">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <h1 style={{margin:0,fontSize:22}}>Dashboard</h1>
        <div style={{background:'rgba(0,0,0,0.04)',padding:'6px 10px',borderRadius:8,fontSize:13,color:'var(--muted)'}}>Overview</div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12,width:'50%'}}>
        <div className="search">
          <input placeholder="Search for anything..." style={{border:'none',outline:'none',flex:1,fontSize:14,background:'transparent'}}/>
        </div>
        <div className="user" title="Account">
          <div style={{textAlign:'right'}}>
            <div style={{fontWeight:800}}>Alex Meian</div>
            <div style={{fontSize:12,color:'var(--muted)'}}>Product manager</div>
          </div>
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23ddd'/></svg>" alt="avatar"/>
        </div>
      </div>
    </header>
  );
}
