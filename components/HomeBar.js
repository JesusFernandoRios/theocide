import Link from 'next/link'
import styles from '../styles/HomeNav.module.css'

function HomeBar() {
    return (
        <nav className={styles.container}>
            <div className={styles.hamburger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul className={styles.navRoutes}>
                <li><Link href="/Events">Events</Link></li>
                <li><Link href="/Band">Band</Link></li>
                <li><Link href="/Bio">Bio</Link></li>
                <li><Link href="/Store">Store</Link></li>
            </ul>
        </nav>
    )
}

export default HomeBar
