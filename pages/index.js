import Head from 'next/head'
import BandProfile from '../components/BandProfile'
import styles from '../styles/Home.module.css'

import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Home() {


  const bandMembers =[
    { image:'/theo1.jpg',
      name: 'bandmemberone'
    },
    {
      image:'/theo2.jpg',
      name: 'bandmemberone'
    },
    {
      image:'/theo3.jpg',
      name: 'Alex Angulo',
      instrument:'Drums/ Vocals'
    },
    {
      image:'/theo4.jpg',
      name: 'Mario Ramos'
    }
  ]  

  return (

    <main className={styles.container}>
      <Head>
        <title>Theocide Music</title>
        <link rel="icon" href="/bandLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>;
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet"></link>
      </Head>

      <section className={styles.main}>

        <h1 className={styles.bandMotto}>Explore Theocide</h1>

        <hr className={styles.lineBreak}/>
        
        <div className={styles.downArrow}>
          <ExpandMoreIcon style={{fontSize:100, color:'white'}}/>
        </div>
        
      </section>

      <section className={styles.socialMedia}>
          <a href="https://www.youtube.com/channel/UC30HTr80fAs6Nl7elMu2Hnw/featured">
            <YouTubeIcon style={{ fontSize: 60, color:'FE0000'}} />
          </a>

          <a href="https://www.facebook.com/theocide">
            <FacebookIcon  style={{ fontSize: 60, color:'blue'}} />
          </a>
            
          <a href="https://www.instagram.com/theocide/">
            <InstagramIcon style={{ fontSize: 60, color:'white' }} />
          </a>
      </section>

      <section className={styles.profileSection}>
        {bandMembers.map((members, index) => (
          <BandProfile key={index} image={members.image} name={members.name}/>
        ))}

      </section>

      <footer className={styles.footer}>
        <img src="/bandLogo.png" alt="Theocide Logo" className={styles.logo} />
      </footer>
    </main>
  )
}
