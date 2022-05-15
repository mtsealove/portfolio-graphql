import React from "react";
import styles from '../../styles/about.module.scss';

type AboutItemProps = {
    label: string;
    icon: string;
    value: string;
}

const AboutItem = ({label, icon, value}:AboutItemProps) => {
    return(
        <div className={styles.item}>
            <img src={icon}
                 className={styles.itemIcon}
                 alt=''/>
            <div className={styles.itemLV}>
                <label className={styles.itemLabel}>{label}</label>
                <span className={styles.itemValue}>{value}</span>
            </div>
        </div>
    )
}

export default AboutItem;[]
