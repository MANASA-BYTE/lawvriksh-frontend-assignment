import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OverviewCards from './components/OverviewCards';
import ProjectSummary from './components/ProjectSummary';
import TodayTasks from './components/TodayTasks';
import OverallProgress from './components/OverallProgress';
import ProjectsWorkload from './components/ProjectsWorkload';

export default function App(){
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={"app-root "+(collapsed?'sidebar-collapsed':'')}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className="main-area">
        <Header />
        <div className="dashboard-grid">
          <OverviewCards />
          <div className="mid-row">
            <ProjectSummary />
            <OverallProgress percent={75} />
          </div>
          <div className="bottom-row">
            <TodayTasks />
            <ProjectsWorkload />
          </div>
        </div>
      </main>
    </div>
  );
}
