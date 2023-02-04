import Cards from "../../components/cards/Cards.js";
import Sidebar from "../layout/SideBar";
import styles from "./Home.module.css"



function Home(){
   return(
    <main className={styles.main}> 

        <div className={styles.cardBody}>
            <div className={styles.cardContainer}>
                <div className={styles.cardArea}>
                    <Cards 
                        className={styles.cardImage}
                        title="HTML/CSS" 
                        subject = "03/02/2023"
                    ></Cards>
                    <div className={styles.cardImageTitle}>
                        <h2>HTML AND CSS</h2>
                        <p>How semantic HTML, CSS Flex box and Grid layout Work?</p>
                    </div>
                </div>
            </div>      
            
            <div className={styles.cardContainer}>
                <div className={styles.cardArea}>
                    <Cards 
                        className={styles.cardImage}
                        title="Java FX" 
                        subject = "03/02/2023"
                    ></Cards>
                    <div className={styles.cardImageTitle}>
                        <h2>Java FX</h2>
                        <p>Setting up Java FX envoriment on Eclipse</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardArea}>
                    <Cards 
                        className={styles.cardImage}
                        title="Java FX" 
                        subject = "03/02/2023"
                        
                    ></Cards>
                    <div className={styles.cardImageTitle}>
                        <h2>Jav FX</h2>
                        <p>Setting up Java FX envoriment on Eclipse</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardArea}>
                    <Cards 
                        className={styles.cardImageRand}
                        title="Java FX" 
                        subject = "03/02/2023"
                    ></Cards>
                    <div className={styles.cardImageTitle}>
                        <h2>Jav FX</h2>
                        <p>Setting up Java FX envoriment on Eclipse</p>
                    </div>
                </div>
            </div>

            

        </div>
        
        <div className={styles.sidebarContainer}> 
            <div className={styles.sidebar}>
                <Sidebar />
            </div>

        </div>
    </main>
   
   ) 
}

export default Home;