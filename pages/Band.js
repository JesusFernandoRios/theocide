
import NavBar from '../components/NavBar'
import BandProfile from "../components/BandProfile"
import PageFooter from '../components/PageFooter'
import styles from '../styles/BandProfiles.module.css'

const bandMembers =[
    { image:'/theo1.jpg',
      name: 'bandmemberone',
      role: 'Guitar'
    },
    {
      image:'/theo2.jpg',
      name: 'bandmemberone',
      role: 'Guitar'
    },
    {
      image:'/theo3.jpg',
      name: 'Alex Angulo',
      role:'Drums/ Vocals'
    },
    {
      image:'/theo4.jpg',
      name: 'Mario Ramos',
      role: 'Bass Guitar'
    }
]  

function Band() {
    return (
      <section id="Members" className={styles.mainContainer}>
        <NavBar/>

        <div className={styles.imageContainer}>
          {bandMembers.map((members, index) => (
            <BandProfile key={index} image={members.image} name={members.name} role={members.role}/>
          ))}
        </div>


        <PageFooter/>
      </section>
      
    )
}

export default Band
