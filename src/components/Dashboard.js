// import styles from '..App.module.scss'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div>
      <div>
        <i className="bi bi-hexagon"></i> <span>Dashboard</span>
      </div>
      <div className="d-flex flex-column justify-content-start">
        <div> Dashboard</div>
        <div> Product</div>
        <div> Customers</div>
        <div> Income</div>
        <div> Promote</div>
        <div> Help</div>
      </div>
    </div>
  );
}

export default Dashboard;
