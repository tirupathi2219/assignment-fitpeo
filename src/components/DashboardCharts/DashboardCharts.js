 import React from 'react';

 // helpers
 import {barChartData} from '../../helpers/common';

 // styles
 import styles from './DashboardCharts.module.scss';

 const DashboardCharts = () => {

    return (
        <>
        <div>
            <div className='d-flex'>
                <div>
                <p>title</p>
                <span>ifh</span>
                </div>
                <div>dropdown</div>
            </div>
            <div className={styles.chart_container}>
            {
                barChartData.map((item) => {
                    return (
                        <div>
                            <div style={{height:`${item?.growth * 20}px`}} className={item.background == true ? styles.bar_background : styles.ash_background}></div>
                            <span>{item?.month}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
 }
 export default DashboardCharts;