import Head from 'next/head'
import HomeBar from '../components/HomeBar'
import Footer from '../components/Footer'
import EventsInfo from '../components/EventsInfo'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <>

    <HomeBar/>

    <main className={styles.container}>
      <Head>
        <title>Theocide Music</title>
        <link rel="icon" href="/bandLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>;
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"></link>
      </Head>

      <section className={styles.homeContent}>

        <div className={styles.homeEvents}>
          <h2>Upcoming Events</h2>
          <EventsInfo/>
        </div>

      </section>
      
    </main>
    <Footer/>
    </>
  )
}
