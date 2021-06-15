import styles from '../styles/EventsPage.module.css'

function EventsInfo({image, date, eventName, tickets}) {

    return (
        <div className={styles.events}>
            <img src={image} alt={eventName}/>
            <h2>{eventName}</h2>
            <p>{date}</p>
            <a href={tickets}>tickets</a>
        </div>
    )
}

export default EventsInfo
