import React from "react";
import styles from '../styles/skills.module.scss';
type SkillItemProps = {
    icon: string;
    name: string;
}

const SkillItem = ({icon, name,}:SkillItemProps) => {
    return(
            <div className={styles.item}>
                <div className={styles.itemFront}>
                    <img src={icon}
                         alt={icon}/>
                    <span className={styles.itemName}>
                        {name}
                    </span>
                </div>
            </div>
    )
}
export default SkillItem;
