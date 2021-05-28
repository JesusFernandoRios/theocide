import Head from 'next/head'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (

    <main className={styles.container}>
      <Head>
        <title>Theocide Music</title>
        <link rel="icon" href="/bandLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>;
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar/>

      <img className={styles.bandLogo} src="/theocid5white.png" alt="Band Logo"/>
      <p className={styles.homeHeader}>Your Ignorance keeps you Blind upon Theocide</p>

    </main>
  )
}
