import styles from '../styles/SocialLinks.module.css'

function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href="https://m.facebook.com/profile.php?id=294842914636307&ref=content_filter" target="_blank">
                <img className={styles.socialIcons} src="/socialmediaicons/faceicon.png" alt="facebook icon"/>
            </a>
            <a href="https://www.instagram.com/theocide/" target="_blank">
                <img className={styles.socialIcons} src="/socialmediaicons/instaicon.png" alt="instagram icon"/>
            </a>
            <a href="https://youtube.com/channel/UC30HTr80fAs6Nl7elMu2Hnw" target="_blank">
                <img className={styles.socialIcons} src="/socialmediaicons/youtubeicon.png" alt="youtube icon"/>
            </a>
        </div>
    )
}

export default SocialLinks
