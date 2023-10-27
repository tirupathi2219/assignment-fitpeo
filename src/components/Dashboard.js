import React from "react";

import styles from './Dashboard.scss'

function Dashboard() {
  return (
    <div>
      <div>
        <i class="bi bi-nut"></i> <span>Dashboard</span>
      </div>
      <div className={` ${styles.navigation} d-flex flex-column  align-items-start`}>
        <div><i class="bi bi-bank"></i>&nbsp; Dashboard</div>
        <div> <i class="bi bi-boxes"></i>&nbsp; Product <i class="bi bi-chevron-right"></i></div>
        <div><i class="bi bi-person-square"></i>&nbsp; Customers <i class="bi bi-chevron-right"></i></div>
        <div><i class="bi bi-headset"></i>&nbsp; Income <i class="bi bi-chevron-right"></i></div>
        <div><i class="bi bi-percent"></i>&nbsp; Promote <i class="bi bi-chevron-right"></i> </div>
        <div><i class="bi bi-chat-square-quote"></i>&nbsp; Help <i class="bi bi-chevron-right"></i></div>
      </div>
    </div>
  );
}

export default Dashboard;
