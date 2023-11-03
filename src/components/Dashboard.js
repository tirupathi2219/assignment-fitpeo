import React from "react";
import avatar from '../images/avatar.jpg'

import styles from './Dashboard.module.scss'

function Dashboard() {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.dashboard_header}`}>
        <i class="bi bi-nut"></i> <span>Dashboard</span>
      </div>
      <div className={`${styles.navigation} d-flex flex-column  align-items-start`}>

        <div><div><i class="bi bi-bank"></i>&nbsp; Dashboard</div></div>
        <div>
          <div>
            <i class="bi bi-boxes"></i>&nbsp; Product
          </div>
          <i class="bi bi-chevron-right"></i>
        </div>
        <div>
          <div>
            <i class="bi bi-person-square"></i>&nbsp; Customers
          </div>
          <i class="bi bi-chevron-right"></i>
        </div>
        <div>
          <div>
            <i class="bi bi-headset"></i>&nbsp; Income
          </div>
          <i class="bi bi-chevron-right"></i>
        </div>
        <div>
          <div>
            <i class="bi bi-percent"></i>&nbsp; Promote
          </div>
          <i class="bi bi-chevron-right"></i>
        </div>
        <div>
          <div>
            <i class="bi bi-chat-square-quote"></i>&nbsp; Help
          </div>
          <i class="bi bi-chevron-right"></i>
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
        <i class="bi bi-chevron-down"></i>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
