import styles from './App.module.scss'
import Dashboard from './components/Dashboard';

function App() {
  
  const handleChange = () => {
    console.log('6== change');
  }

  const handleBlur = () => {
    console.log('9== blur');
  }

  return (
    <div className={`${styles.app} container-fluid`}>
      <div className={`row`}>
        <section className={`${styles.navigation_container} col-sm-2`}>
          <Dashboard />
        </section>
        <section className={`${styles.content_container} col-sm-10`}>
          <header className={`d-flex justify-content-between`}>
            <div>
              <h6> Hello Shathruk</h6></div>
            <div>
              <input type='text' placeholder='Search' onChange={handleChange} onBlur={handleBlur} />
            </div>
          </header>
        </section>
      </div>
    </div>
  );
}

export default App;
