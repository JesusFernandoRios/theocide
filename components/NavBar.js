import styles from '../styles/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.navLinks}> 
                <li><a href="#Home"> Events</a></li>
                <li><a href="#Bio"> Bio</a></li>
                <li><a href="#Members"> Band Members </a></li>
                <li><a>Store</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
