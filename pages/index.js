import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Theocide Music</title>
        <link rel="icon" href="/theocid5white.png" />
      </Head>

      <main className={styles.main}>
        <article>
          <h1>Band Members</h1>
          <p> Steven Ford - Rhythm Guitar
              Tim Janes - Lead Guitar
              Alex Angulo - Drums/ Vocals
              Mario Ramos - Bass Guitar
          </p>
        </article>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
