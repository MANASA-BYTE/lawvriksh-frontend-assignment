import React from 'react';
export default function ProjectsWorkload(){
  const people = [
    {name:'Sam', n:7},{name:'Meldy', n:8},{name:'Ken', n:2},{name:'Dmitry', n:10},{name:'Vego', n:8},{name:'Kadin', n:2},{name:'Melm', n:4},
  ];
  return (
    <section className="workload card" aria-labelledby="workload-heading">
      <h3 id="workload-heading" style={{margin:0,marginBottom:12}}>Projects Workload</h3>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {people.map((p,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <div style={{width:36,height:36,borderRadius:999,background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 6px rgba(0,0,0,0.06)'}}>{String(i+1).padStart(2,'0')}</div>
              <div style={{fontWeight:700}}>{p.name}</div>
            </div>
            <div style={{fontWeight:800}}>{p.n}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
