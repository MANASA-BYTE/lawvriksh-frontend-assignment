import React, {useEffect, useRef} from 'react';
export default function OverallProgress({percent=75}){
  const circleRef = useRef(null);
  useEffect(()=>{
    const circle = circleRef.current;
    if(!circle) return;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - (percent/100) * circumference;
    setTimeout(()=>{ circle.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(.2,.9,.2,1)'; circle.style.strokeDashoffset = offset; }, 100);
  },[percent]);
  return (
    <aside className="overall-progress card" aria-labelledby="overall-heading">
      <h3 id="overall-heading" style={{margin:0,marginBottom:8}}>Overall Progress</h3>
      <div className="gauge" role="img" aria-label={`Overall progress ${percent} percent`}>
        <div className="ring" >
          <svg width="170" height="170" viewBox="0 0 120 120" >
            <defs>
              <linearGradient id="grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#ff7b47" />
                <stop offset="100%" stopColor="#ff6b35" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="48" stroke="#f0e9e6" strokeWidth="14" fill="none"/>
            <circle ref={circleRef} cx="60" cy="60" r="48" stroke="url(#grad)" strokeWidth="14" strokeLinecap="round" fill="none"/>
          </svg>
          <div className="center">
            <div className="percent">{percent}%</div>
            <div className="percent-sub">Completed</div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',gap:18,marginTop:12}}>
        <div style={{textAlign:'center'}}><div style={{fontSize:18,fontWeight:800}}>95</div><div style={{color:'var(--muted)'}}>Total projects</div></div>
        <div style={{textAlign:'center'}}><div style={{fontSize:18,color:'#23b14d',fontWeight:800}}>26</div><div style={{color:'var(--muted)'}}>Completed</div></div>
      </div>
    </aside>
  );
}
