import React from "react";
import nameIcon from '../assets/ic_name.svg';
import phoneIcon from '../assets/ic_phone.svg';
import emailIcon from '../assets/ic_email.svg';
import locationIcon from '../assets/ic_location.svg';
import schoolIcon from '../assets/ic_school.svg';
import calendarIcon from '../assets/ic_calendar.svg';
import AboutItem from "./list/AboutItem";
import styles from '../styles/about.module.scss';

const About = () => {
    return (
        <article className={styles.wrapper}>
            <div className='container'>
                <h1>About</h1>
                <div className={styles.container}>
                    <AboutItem label='이름'
                               value='이산해'
                               icon={nameIcon}/>
                    <AboutItem label='출생'
                               value='96.09.27'
                               icon={calendarIcon}/>
                    <AboutItem label='거주지'
                               value='서울시 광진구'
                               icon={locationIcon}/>
                    <AboutItem label='전화번호'
                               value='010-6346-1686'
                               icon={phoneIcon}/>
                    <AboutItem label='Email'
                               value='mtsealove0927@gmail.com'
                               icon={emailIcon}/>
                    <AboutItem label='학력'
                               value='가천대학교 컴퓨터공학과 졸업(2021.08)'
                               icon={schoolIcon}/>
                </div>
            </div>
        </article>
    );
}

export default About;
