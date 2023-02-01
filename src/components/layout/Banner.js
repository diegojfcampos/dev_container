import styles from "../layout/Banner.module.css"

function Banner(props){
    return(
        <div className={styles.banner}>
            <h1> {props.title}</h1>
        </div>
    )
}

export default Banner;