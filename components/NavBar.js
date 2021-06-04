import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.navLinks}> 
                <li>
                    <Link href="/Store"><a>Store</a></Link>
                </li>
                <li>
                    <Link href="/Events"><a>Events</a></Link>
                </li>
                <li>
                    <Link href="/"><img src="/bandLogo.png" alt="band logo"/></Link>
                </li>
                <li>
                    <Link href="/Band"><a>Band</a></Link>
                </li>
                <li>
                    <Link href="/Bio"><a>Bio</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
