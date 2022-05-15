import type { NextPage } from 'next'
import styles from '../styles/index.module.scss';
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Career from "../components/Career";

const Home: NextPage = () => {
  return (
    <div>
      <section className={styles.top}>
          <p>개발자의 포트폴리오입니다</p>
      </section>
      <Header/>
        <main>
            <About/>
            <Skills/>
            <Career/>
        </main>
        <div style={{height: '100vh'}}>

        </div>
    </div>
  )
}

export default Home
