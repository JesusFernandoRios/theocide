import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Theocide Music</title>
        <link rel="icon" href="/bandLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>;
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        <article className={styles.mainArticle}>
          <h1 className={styles.bandMembers}>Welcome To Theocide</h1>

          <p className={styles.bandNames}> 
              Steven Ford - Rhythm Guitar |
              
              Tim Janes - Lead Guitar |
              
              Alex Angulo - Drums/ Vocals |
              
              Mario Ramos - Bass Guitar
          </p>
        </article>
        <figure className={styles.mainFigure}>
          <img className={styles.bandImage} src="/bandPicture.jpg" alt="Band Picture" />
        </figure>
      </main>

      <footer className={styles.footer}>
        <img src="/bandLogo.png" alt="Theocide Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
