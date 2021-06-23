import { useState } from 'react'

import Link from 'next/link'
import styles from '../styles/HomeNav.module.css'

function HomeBar() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
    setActive(!isActive);
    };

    return (
        <nav className={styles.container}>
            <div className={styles.hamburger} onClick={toggleClass}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul className={isActive ? styles.open : styles.navRoutes}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Events">Events</Link></li>
                <li><Link href="/Band">Band</Link></li>
                <li><Link href="/Bio">Bio </Link></li>
                <li><a href="https://www.facebook.com/theocide/shop?rid=294842914636307&rt=6&referral_code=page_shop_card" target="_blank">Store</a></li>
            </ul>
        </nav>
    )
}

export default HomeBar
