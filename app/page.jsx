import styles from './page.module.css'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import BrendsSection from './components/brends-section/BrendsSection'
import About from './components/about/About'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <Hero/>
      <BrendsSection/>
      <About/>
    </main>
  )
}
