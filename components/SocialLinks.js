import styles from '../styles/SocialLinks.module.css'

function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href=""><img className={styles.socialIcons} src="/socialmediaicons/faceicon.png" alt="facebook icon"/></a>
            <a href=""><img className={styles.socialIcons} src="/socialmediaicons/instaicon.png" alt="instagram icon"/></a>
            <a href=""><img className={styles.socialIcons} src="/socialmediaicons/youtubeicon.png" alt="youtube icon"/></a>
        </div>
    )
}

export default SocialLinks
