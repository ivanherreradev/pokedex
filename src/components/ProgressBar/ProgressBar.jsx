import React, { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ percent }) => {
    const [filled, setFilled] = useState(percent);

    return (
        <div className={styles.progressbar}>
            <div
                className={styles.bar}
                style={{
                    height: '100%',
                    width: `${filled}%`,
                    backgroundColor: '#000',
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
