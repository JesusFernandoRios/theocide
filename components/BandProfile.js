import styles from '../styles/BandProfiles.module.css'

function BandProfile({image, name, role}) {
    return (
        <div className={styles.container}>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h3>{role}</h3>
        </div>
    )
}

export default BandProfile;
