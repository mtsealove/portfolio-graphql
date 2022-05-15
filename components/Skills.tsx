import React, {useEffect} from "react";
import styles from '../styles/skills.module.scss';
import frontIcon from '../assets/ic_front.svg';
import backIcon from '../assets/ic_back.svg';
import mobileIcon from '../assets/ic_mobile.svg';
import SkillItem from "./SkillItem";
import {imageOptimizer} from "next/dist/server/image-optimizer";
import {gql} from "apollo-boost";
import {Query} from 'react-apollo';
import client from "../libs/client";

const Skills = () => {
    useEffect(() => {
        const items = document.querySelectorAll(`.${styles.category}`);
        console.log(items);
        const observers:IntersectionObserver[] = [];
        items.forEach((item)=>{
            const observer = new IntersectionObserver(
                ([e]) => {
                    // 헤더의 테두리가 사라지고, 탭 하단에 생성
                    e.target.classList.toggle(styles.hide, e.intersectionRatio < 1);
                },
                { threshold: [1] },
            );
            observer.observe(item);
            observers.push(observer)
        });
        return () => {
            observers.map((observer)=>{
                observer.disconnect();
            })
        };
    }, []);
    const query = gql`
    query {
        skills {
            id
            icon
            name
        }
    } 
    `;
    useEffect(()=>{
        client.query({
            query
        }).then((res)=>{
            console.log(res.data);
        })
    }, []);
    return(
        <section className={styles.container}>
            <article className={styles.category}>
                <div className='container'>
                    <h1 className={`white ${styles.title}`}>Skills</h1>
                    <br/>
                    <span>
                        <img src={frontIcon}
                             alt='' />
                        FrontEnd
                    </span>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.skills}>
                    <SkillItem icon='/icons/ic_html.png'
                               name='HTML CSS JS'/>
                    <SkillItem icon='/icons/ic_react.png'
                               name='React'/>
                    <SkillItem icon='/icons/ic_next.svg'
                               name='Next.js'/>

                    <SkillItem icon='/icons/ic_sass.png'
                               name='SASS(SCSS)'/>
                    <SkillItem icon='/icons/ic_jquery.png'
                               name='JQuery'
                    />
                    <SkillItem icon='/icons/ic_bootstrap.png'
                               name='Bootstrap'
                    />
                    <SkillItem icon='/icons/ic_ts.png'
                               name='TypeScript'/>
                </div>
            </article>
            <article className={styles.category}>
                <div className='container'>
                    <span>
                        <img src={backIcon}
                             alt=''/>
                        BackEnd
                    </span>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.skills}>
                    <SkillItem icon='/icons/ic_nodejs.png'
                               name='Node.js'/>
                    <SkillItem icon='/icons/ic_java.png'
                               name='Java'/>
                    <SkillItem icon='/icons/ic_jsp.png'
                               name='JSP'/>
                    <SkillItem icon='/icons/ic_kotlin.svg'
                               name='Kotlin'/>
                    <SkillItem icon='/icons/ic_php.png'
                               name='PHP'/>
                    <SkillItem icon='/icons/ic_c.png'
                               name='C'/>
                    <SkillItem icon='/icons/ic_c.png'
                               name='C++'
                    />
                    <SkillItem icon='/icons/ic_python.png'
                               name='Python'/>
                </div>
            </article>
            <article className={styles.category}>
                <div className='container'>
                    <span>
                        <img src={mobileIcon}
                             alt=''/>
                        Mobile
                    </span>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.skills}>
                    <SkillItem icon='/icons/ic_android.png'
                               name='Android'/>
                    <SkillItem icon='/icons/ic_swift.png'
                               name='IOS'/>
                    <SkillItem icon='/icons/ic_react_native.png'
                               name='React Native'/>
                </div>
            </article>
        </section>
    )
};

export default Skills;
