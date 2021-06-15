import NavBar from '../components/NavBar'
import styles from '../styles/EventsPage.module.css'
import EventsInfo from '../components/EventsInfo'

const eventInformation = [
    {
        image:'/events/TheRock.jpg',
        date:'Friday, July 30th',
        eventName:'The Rock',
        tickets:'https://rocktucson.com/event/sleeping-with-the-witch/?instance_id=586'
    },
    {
        image:'/events/AwaitingEternity.jpg',
        date:'June 18th',
        eventName:'Sunshine Studios Live',
        tickets:'https://wl.seetickets.us/event/Ground-Zero-Promotions-Presents/424356?afflky=SunshineStudiosLive'
    }

]

function Events() {
    return (
        <div className={styles.container}>

            <NavBar/>

            <h1>Upcoming Events</h1>
            
            <div className={styles.content}>
                {eventInformation.map(( events, index) => (
                    <EventsInfo key={index} image={events.image} date={events.date} eventName={events.eventName} tickets={events.tickets}/>
                ))}
            </div>
        </div>
    )
}

export default Events
