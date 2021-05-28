import styles from '../styles/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.navLinks}> 
                <li>Home</li>
                <li>Events</li>
                <li>Band</li>
                <li>Bio</li>
                <li>Store</li>
            </ul>
        </nav>
    )
}

export default NavBar
