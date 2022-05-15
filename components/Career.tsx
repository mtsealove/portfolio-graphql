import React from "react";
import styles from '../styles/career.module.scss';
import CareerItem from "./list/CareerItem";

const Career =() => {
    return (
        <article>
            <div className='container'>
                <h1>Records</h1>
                <div className={styles.container}>
                    <h2>수상</h2>
                    <h2>경력</h2>
                    <CareerItem duration='2019.08 ~ 2020.05'
                                position='풀스택 개발자'
                                title='2019 예비창업 패키지 2차(버스링커)'>
                        <div>
                            <b>버스링커</b>는 버스를 활용한 물류운송 플랫폼으로
                        </div>
                    </CareerItem>
                    <CareerItem duration='2020.06 ~ 2021.02'
                                position='풀스택 개발자'
                                title='브이아이펫' />
                    <CareerItem duration='2021.08'
                                position='졸업'
                                title='가천대학교' />
                    <CareerItem duration='2021.03 ~'
                                position='프론트엔드 개발자'
                                title='파이퍼블릭' />
                </div>
            </div>
        </article>
    )
}

export default Career;
