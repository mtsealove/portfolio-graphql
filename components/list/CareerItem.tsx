import React, {ReactNode} from "react";
import positionIcon from '../../assets/ic_position.svg';
import styles from '../../styles/career.module.scss';

type CareerItemProps = {
    duration: string;
    title: string;
    position: string;
    children?: ReactNode;
}

const CareerItem = ({duration, title, position,children}:CareerItemProps) => {
    return(
        <div className={styles.item}>
            <span className={styles.itemDuration}>{duration}</span>
            <div className={styles.itemContents}>
                <p className={styles.itemTitle}>{title}</p>
                <span className={styles.itemPosition}>
                    {position}
                </span>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CareerItem;
