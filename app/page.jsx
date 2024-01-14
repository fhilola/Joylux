import styles from './page.module.css'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
      <Hero/>
    </main>
  )
}
