
import styles from '../styles/BandProfiles.module.css'

function BandProfile({image, name}) {
    return (
        <div className={styles.container}>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
        </div>
    )
}

export default BandProfile;
