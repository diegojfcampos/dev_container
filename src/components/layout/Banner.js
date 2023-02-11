import styles from "../layout/Banner.module.css"
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
function Banner(props){

    const location = useLocation();
    const path = location.pathname;
    const[bannetTitle, setBannerTitle] = useState();

    useEffect(()=>{
        switch(path){
            case '/home': setBannerTitle(()=>'Article') ; break;
            case '/contact': setBannerTitle(()=>'Contact') ; break;
            case '/about': setBannerTitle(()=>'About') ; break;
            default: setBannerTitle(()=>'Article') ; break;
        }
    },[path]);
    

    return(
        <div className={styles.banner}>
            <h1> {bannetTitle} </h1>
        </div>
    )
}

export default Banner;