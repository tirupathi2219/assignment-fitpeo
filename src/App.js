import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from './components/Dashboard';
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";

import styles from './App.module.scss'

function App() {
function handleClick () {
  
}
  return (
      <div className={`${styles.app} container-fluid`}>
      <div className={`row`} onClick={handleClick}>
        <section className={`${styles.navigation_container} col-sm-2`}>
          <Dashboard />
        </section>
        <section className={`${styles.content_container} col-sm-10`}>
          <DashboardOverview />
        </section>
      </div>
    </div>    
  );
}

export default App;
