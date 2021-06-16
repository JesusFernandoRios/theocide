import styles from '../styles/EventsPage.module.css'
import Image from 'next/image'

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

function EventsInfo() {

    return (

        <div className={styles.content}>
            {eventInformation.map((events, index) => (
                <a key={index} href={events.tickets} className={styles.events} target="_blank">
                        
                    <Image className={styles.eventImage} src={events.image} alt={events.eventName} width={250} height={300}/>
                    <h2>{events.eventName}</h2>
                    <p>{events.date}</p>
                </a>
            ))}
        </div>
        
    )
}

export default EventsInfo
