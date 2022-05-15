import React, {useEffect, useRef} from "react";
import styles from '../styles/header.module.scss';

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    // 탭이 sticky 상태인지 확인하여 색상 변경
    useEffect(() => {
        if (headerRef.current) {
            const observer = new IntersectionObserver(
                ([e]) => {
                    // 헤더의 테두리가 사라지고, 탭 하단에 생성
                    e.target.classList.toggle(styles.stuck, e.intersectionRatio < 1);
                },
                { threshold: [1] },
            );
            observer.observe(document.querySelector(`.${styles.header}`)!);
            return () => observer.disconnect();
        }
        return () => {};
    }, [headerRef.current]);
    return(
        <header className={styles.header}
                ref={headerRef}>
            <div className={styles.headerContainer}>
                <span className={styles.logo}>
                포트폴리오
                </span>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Career</li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;
