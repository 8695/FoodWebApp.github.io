
import { useState } from 'react';
import styles from '../css/Navbar.module.css';
import cart from "../img/image.png";
import profile from "../img/profile.png";
export const Navbar =()=>{
    const [count, setCount]=useState(0);
    return(
       
        <nav className={styles.navbar}>
        <h1 className={styles.title}>Hungry.com</h1>
        <div className={styles.listnav}>
        
        <h1 className={styles.navitem}>About us</h1>
        <h1 className={styles.navitem}>Contact us</h1>
        
        
        <span style={{display:"flex"}}>
        <h1 className={styles.navitem}>Signin</h1>
        <img src={profile} alt='Sign in' className={styles.profileicon} /></span>
        
        
        
        
        <img src={cart} alt="image" className={styles.cartimg} />
        <span className={styles.cartCount}>{count}</span>
        </div>
        </nav>
        
    )
}
