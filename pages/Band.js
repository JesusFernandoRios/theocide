
import NavBar from '../components/HomeBar'
import BandProfile from "../components/BandProfile"
import styles from '../styles/BandProfiles.module.css'
import Footer from '../components/Footer'

const bandMembers =[
    { image:'/theo4.jpg',
      name: 'Mario Ramos',
      role: 'Guitar'
    },
    {
      image:'/theo2.jpg',
      name: 'Steven Ford',
      role: 'Guitar/ Vocals'
    },
    {
      image:'/theo3.jpg',
      name: 'Alex Angulo',
      role:'Drums/ Vocals'
    },
    {
      image:'/theo5.jpg',
      name: 'Santo Murillo',
      role: 'Bass Guitar'
    }
]  

function Band() {
    return (
      <>
        <section id="Members" className={styles.mainContainer}>
          <NavBar/>

          <div className={styles.logoContainer}>
            <img className={styles.colorLogo} src='/colorLogo/yellow.png' alt='Logo'/>
          </div>

          <div className={styles.imageContainer}>
            {bandMembers.map((members, index) => (
              <BandProfile key={index} image={members.image} name={members.name} role={members.role}/>
            ))}
          </div>

        </section>
        <Footer/>
      </>
    )
}

export default Band
