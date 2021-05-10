import Head from 'next/head'
import BandProfile from '../components/BandProfile'
import styles from '../styles/Home.module.css'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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

    <div className={styles.container}>
      <Head>
        <title>Theocide Music</title>
        <link rel="icon" href="/bandLogo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>;
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>

        <div> 
          
          <YouTubeIcon fontSize="large"/>
          <FacebookIcon fontSize="large"/>
          <InstagramIcon fontSize="large"/>
        
        </div>
      </main>

      <article className={styles.mainArticle}>
          {/* <h1 className={styles.bandMembers}>The•ism</h1> */}

          <p className={styles.bandBio}> 
              Belief in the existence of a god or gods, especially belief in a personal God as creator and ruler of the world
              –cide ending originates from the Latin word caedere meaning to kill. 
              We want the world to know that we are comming for there gods and religion. We are comming for there ignorance they hold on so dearly to. It shall be eliminated. 
              Religion and the believe in god and or gods leads to a weakened critical thinking or allows one to accept things the way they are. Conspiracy, and end of time predictions have allowed the churches to rule through fear, politics and crusades for far to long. Religion breeds racism, sexism, bigotry and hatred. This leaves no room for growth in ones self in this world. Religion and the beliefs in gods has allowed one and many more to not realize the abuse and manipulation they are experiencing and even more disgusting one may even accept that abuse and even welcome it. 
              This is why we must kill god and religion for the cancer that it is.
              
              <br/>
              Your Ignorance keeps you blind bring upon Theocide.
          </p>

          {/* <p className={styles.bandNames}> 
              Steven Ford - Rhythm Guitar |
              
              Tim Janes - Lead Guitar |
              
              Alex Angulo - Drums/ Vocals |
              
              Mario Ramos - Bass Guitar
          </p> */}
        </article>
      <section className={styles.profileSection}>
        {bandMembers.map((members, index) => (
          <BandProfile key={index} image={members.image} name={members.name}/>
        ))}

      </section>

      <footer className={styles.footer}>
        <img src="/bandLogo.png" alt="Theocide Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
