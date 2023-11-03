import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from './components/Dashboard';
import DashboardOverview from "./components/DashboardOverview/DashboardOverview";

import styles from './App.module.scss'

function App() {

  return (
    <div className={`${styles.app} container-fluid`}>
      <div className={`row`}>
        <section className={`${styles.navigation_container} col-sm-2`}>
          <Dashboard />
        </section>
        <section className={`${styles.content_container} col-sm-10`}>
          <DashboardOverview />
        </section>
        fejhfjeknfk
      </div>
    </div>
  );
}

export default App;
