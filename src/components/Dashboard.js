import React from "react";
import avatar from '../images/avatar.jpg'

import styles from './Dashboard.module.scss'
import { NavLink, useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate()
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.dashboard_header}`} >
          <i className="bi bi-nut"></i> <span>Dashboard</span>
        </div>
        <div className={`${styles.navigation} d-flex flex-column  align-items-start`}>

          <div ><NavLink to='/'><i className="bi bi-nut"></i>&nbsp; Dashboard</NavLink></div>
          <div>
            <NavLink to='/my-projects' onClick={() => { navigate('/my-projects') }}>
              <i className="bi bi-boxes"></i>&nbsp; My Projects
              <i className="bi bi-chevron-right"></i>
            </NavLink >
          </div>
          <div>
            <NavLink to='/skills'>
              <div>
                <i className="bi bi-person-square"></i>&nbsp; Skills
                <i className="bi bi-chevron-right"></i>
              </div>

            </NavLink>
          </div>
          <div>
            <div>
              <i className="bi bi-headset"></i>&nbsp; Income
            </div>
            <i className="bi bi-chevron-right"></i>
          </div>
          <div>
            <div>
              <i className="bi bi-percent"></i>&nbsp; Promote
            </div>
            <i className="bi bi-chevron-right"></i>
          </div>
          <div>
            <div>
              <i className="bi bi-chat-square-quote"></i>&nbsp; Contact
            </div>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>

        <div className={`${styles.dashboard_footer_container}`}>
          <div className={`${styles.dashboard_footer}`}>
            <div className="d-flex">
              <img src={avatar} alt="Avatar" className={`${styles.avatar}`} />
              <div className={`${styles.avatar_info}`}>
                <h6>Evano</h6>
                <p>Project Manager</p>
              </div>
            </div>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </div>


    </>
  );
}

export default Dashboard;
