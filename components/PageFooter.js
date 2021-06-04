import styles from '../styles/Footer.module.css'
import Link from 'next/link'

function PageFooter() {
    return (
        <footer className={styles.container}>
            <Link href="/"><img  className={styles.bandLogo} src="/bandLogo.png" alt="band Logo"/></Link>
        </footer>
    )
}

export default PageFooter
