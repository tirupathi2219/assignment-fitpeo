import React from 'react';
import { salesSection } from '../../helpers/common';

import styles from './SalesSection.module.scss'

export default function SalesSection() {
    return (
        <div className={`${styles.sales_container}`}>
            {salesSection.map((item, index) => {
                return (
                    <div className={`${styles.sales_subContainer}`} key={index}>
                        <div className={`${styles.icon} ${styles[`icon${index}`]}`}>
                            <i className={item.icon}></i>
                        </div>
                        <div>
                            <p className={`${styles.stName}`}>{item.status_name}</p>
                            <p className={`${styles.profit}`}>{item.profit}</p>
                            <p>
                                <span className={`${item.status ? `${styles.success}` : `${styles.failure}`}`}>
                                    {
                                        item.status
                                            ? <i className="bi bi-arrow-up"></i>
                                            : <i className="bi bi-arrow-down"></i>
                                    }
                                    {item.profit_percentage}
                                </span>
                                &nbsp;this month
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}