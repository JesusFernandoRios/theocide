import NavBar from '../components/HomeBar'
import Footer from '../components/Footer'
import styles from '../styles/BioPage.module.css'

function Bio() {
    return (
        <>
            <section className={styles.container}>

                <NavBar/>
                <div className={styles.logoContainer}>
                        <img className={styles.colorLogo} src='/colorLogo/red.png' alt='Logo'/>
                </div>

                <div className={styles.content}>

                    <img src="/groupPicture1.jpg" alt="Group Picture"/>
                    
                    <div>
                        <h2>Theocide</h2>
                        <p>
                        To murder the Gods.

                        Theocide is the systematic eradication of 
                        a certain religion. 
                        We want the Christian theist world to know that we are coming for their God and religion. We are coming for their ignorance they hold on so dearly to. 
                        It shall be eliminated. Religion and the belief in God and or Gods leads to a weakened critical thinking or allows one to accept things the way they are. 
                        When ultimately one will learn one must think for oneself! Conspiracy, end of time predictions have allowed the churches to rule through fear, politics and 
                        crusades for far too long. Religion breeds racism, sexism, bigotry and hatred.
                        During The Conquistadors' Crusades through the Americas, they committed theocide to well established civilizations such as the Aztecs and Native Americans and 
                        murdered their gods. This is theocide for the worse due to a Christian theism. That is why our music's message has a strong anti-Christian/anti- organized religion 
                        stance as Christian theology has repeatedly bred contempt and ignorance and has allowed cultures to wipe out other civilizations' cultures without any regard. 
                        This is why we must kill the idea of singular "God" and religion for the cancer that it is.
                        <br/>
                        Your ignorance keeps you blind. Bring upon Theocide.

                    </p>
                    </div>

                </div>

            </section>
            <Footer/>
        </>
    )
}

export default Bio
