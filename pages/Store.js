import NavBar from '../components/NavBar'
import styles from '../styles/StorePage.module.css'

function Store() {
    return (
        <div className={styles.container}>

            <NavBar/>

            <div className={styles.content}>
               <h1>Store</h1>
                <p>Coming Soon...</p> 
            </div>
            
        </div>
    )
}

export default Store
