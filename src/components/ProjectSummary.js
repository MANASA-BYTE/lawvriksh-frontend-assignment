import React from 'react';
const projects = [
  {name:'Nelsa web development', manager:'Om prakash', due:'May 25, 2025', status:'Completed', progress:100},
  {name:'Datascale AI app', manager:'Neilson', due:'Jun 20, 2025', status:'Delayed', progress:35},
  {name:'Media channel branding', manager:'Priya', due:'July 13, 2025', status:'At risk', progress:68},
  {name:'Corlax iOS app', manager:'Matte', due:'Dec 20, 2025', status:'Completed', progress:100},
  {name:'Website builder', manager:'Sukumar', due:'Mar 15, 2026', status:'On going', progress:50},
];
export default function ProjectSummary(){
  return (
    <section className="project-summary card" aria-labelledby="projects-heading">
      <h3 id="projects-heading" style={{margin:0,marginBottom:12}}>Project summary</h3>
      <div style={{display:'flex',gap:8,marginBottom:12}}>
        <select><option>All projects</option></select>
        <select><option>All managers</option></select>
        <select><option>Status</option></select>
      </div>
      <div style={{overflowX:'auto'}}>
        <table>
          <thead>
            <tr><th>Name</th><th>Manager</th><th>Due</th><th>Status</th><th>Progress</th></tr>
          </thead>
          <tbody>
            {projects.map((p,idx)=>(
              <tr key={idx}>
                <td>{p.name}</td>
                <td>{p.manager}</td>
                <td>{p.due}</td>
                <td><span className={"progress-pill "+(p.status==='Completed'?'green':p.status==='Delayed'?'yellow':'red')}>{p.status}</span></td>
                <td>{p.progress}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
