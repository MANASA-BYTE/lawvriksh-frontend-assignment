import React from 'react';
export default function OverviewCards(){
  const cards = [
    {title:'Total revenue', value:'$53,009', hint:'12% increase from last month'},
    {title:'Active projects', value:'95', hint:'10% decrease from last month'},
    {title:'Time spent', value:'1022 Hrs', hint:'8% increase from last month'},
    {title:'Resources', value:'101', hint:'2% increase from last month'},
  ];
  return (
    <section className="overview-cards" aria-label="Overview cards">
      {cards.map((c,i)=>(
        <div key={i} className="card" role="article" aria-roledescription="summary card">
          <h4>{c.title}</h4>
          <div className="value">{c.value}</div>
          <div style={{marginTop:8,fontSize:13,color:'var(--muted)'}}>{c.hint}</div>
        </div>
      ))}
    </section>
  );
}
