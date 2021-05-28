import styles from '../styles/NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.navLinks}> 
                <li>Events</li>
                <li>Bio</li>
                <li>Band Members</li>
                <li>Stores</li>
            </ul>
        </nav>
    )
}

export default NavBar
