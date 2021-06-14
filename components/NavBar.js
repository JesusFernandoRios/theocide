import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/"><img src="/bandLogo.png" alt="band logo"/></Link>
                </li>
                <li>
                    <Link href="/Store"><a>lStore</a></Link>
                </li>
                <li>
                    <Link href="/Events"><a>lEvents</a></Link>
                </li>
                <li>
                    <Link href="/Band"><a>lBand</a></Link>
                </li>
                <li>
                    <Link href="/Bio"><a>lBio  </a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
