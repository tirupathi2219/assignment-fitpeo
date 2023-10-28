import React from 'react';

import styles from './DashboardOverview.module.scss'

export default function DashboardOverview() {

    const handleChange = () => {
        console.log('6== change');
    }

    const handleBlur = () => {
        console.log('9== blur');
    }

    return (
        <>
            <header className={`d-flex justify-content-between`}>
                <div>
                    <h6>Hello Shahrukh <i class="bi bi-emoji-smile"></i>,</h6>
                </div>
                <div className={`${styles.search_container}`}>
                    <input type='text' placeholder='Search' onChange={handleChange} onBlur={handleBlur} />
                    <i class="bi bi-search"></i>
                </div>
            </header>
        </>
    )
}