import styles from '../styles/Footer.module.css'
import SocialLinks from '../components/SocialLinks'

function Footer() {
    return (
        <footer className={styles.container}>
            <SocialLinks/>
        </footer>
    )
}

export default Footer
