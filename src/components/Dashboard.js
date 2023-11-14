import React from "react";
import avatar from '../images/avatar.jpg'

import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.dashboard_header}`}>
        <i className="bi bi-nut"></i> <span>Dashboard</span>
      </div>
      <div className={`${styles.navigation} d-flex flex-column  align-items-start`}>

        <div><div><i className="bi bi-bank"></i>&nbsp; Dashboard</div></div>
        <div>
          <div>
            <i className="bi bi-boxes"></i>&nbsp; Product
          </div>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div>
          <div>
            <i className="bi bi-person-square"></i>&nbsp; Customers
          </div>
          <i className="bi bi-chevron-right"></i>
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
            <i className="bi bi-chat-square-quote"></i>&nbsp; Help
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
  );
}

export default Dashboard;
