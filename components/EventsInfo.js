import styles from '../styles/EventsPage.module.css'
import Image from 'next/image'

function EventsInfo({image, date, eventName, tickets}) {

    return (
        <a href={tickets} className={styles.events} target="_blank">
        
            <Image className={styles.eventImage} src={image} alt={eventName} width={250} height={300}/>
            <h2>{eventName}</h2>
            <p>{date}</p>
            {/* <a href={tickets} target="_blank">tickets/info</a> */}
        </a>
    )
}

export default EventsInfo
