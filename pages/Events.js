import NavBar from '../components/HomeBar'
import styles from '../styles/EventsPage.module.css'
import EventsInfo from '../components/EventsInfo'


function Events() {
    return (
        <div className={styles.container}>

            <NavBar/>
            <div className={styles.logoContainer}>
                <img className={styles.colorLogo} src='/colorLogo/green.png' alt='Logo'/>
            </div>
            
            <div className={styles.eventWrapper}>
                <h1>Upcoming Events</h1>
                <EventsInfo/>
            </div>

                
           
        </div>
    )
}

export default Events
