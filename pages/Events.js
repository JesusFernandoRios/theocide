import NavBar from '../components/NavBar'
import styles from '../styles/EventsPage.module.css'

function Events() {
    return (
        <div className={styles.container}>

            <NavBar/>

            <h1>Upcoming Events</h1>

            <div>
                <p>Coming Soon...</p>
            </div>
        </div>
    )
}

export default Events
