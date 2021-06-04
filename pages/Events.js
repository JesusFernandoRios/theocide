import PageFooter from '../components/PageFooter'
import NavBar from '../components/NavBar'
import styles from '../styles/EventsPage.module.css'

function Events() {
    return (
        <div className={styles.container}>

            <NavBar/>

            <div className={styles.content}>
                <h1>Upcoming Events</h1>
                <p>Coming Soon...</p>
            </div>

            <PageFooter/>
        </div>
    )
}

export default Events
