import React from 'react';
const tasks = [
  {text:'Create user flow for social app', status:'Approved'},
  {text:'Review landing page design', status:'In review'},
  {text:'Prototype fintech screens', status:'In review'},
  {text:'Interactive prototype for DeltaMime', status:'On going'},
  {text:'Finalize icon set', status:'Approved'},
];
export default function TodayTasks(){
  return (
    <section className="tasks card" aria-labelledby="tasks-heading">
      <h3 id="tasks-heading" style={{margin:0,marginBottom:12}}>Today tasks</h3>
      <div style={{display:'flex',gap:12,marginBottom:12}}>
        <div style={{fontWeight:700}}>All</div>
        <div style={{color:'var(--muted)'}}>Important</div>
        <div style={{color:'var(--muted)'}}>Notes</div>
      </div>
      <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:12}}>
        {tasks.map((t,i)=>(
          <li key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:14,height:14,borderRadius:20,background:'var(--accent)'}}></div>
              <div>{t.text}</div>
            </div>
            <div style={{fontWeight:700}}>{t.status}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
