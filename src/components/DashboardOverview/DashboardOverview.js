import React from 'react';

import SalesSection from '../DBSalesSection/SalesSection';

import styles from './DashboardOverview.module.scss'

export const handleChange = () => {
    console.log('6== change');
}

export default function DashboardOverview() {
    const arr = [1, 2, 3, 4, 5]
    return (
        <>
            <header className={`d-flex justify-content-between`}>
                <div>
                    <h6>Welcome to my World KRC <i className="bi bi-emoji-smile"></i>,</h6>
                </div>
                <div className={`${styles.search_container}`}>
                    <input type='text' placeholder='Search' onChange={handleChange} onBlur={handleBlur} />
                    <i className="bi bi-search"></i>
                </div>
            </header>
            <>
                <SalesSection />
            </>
        </>
    )
}