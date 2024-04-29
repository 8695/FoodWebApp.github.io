import { NavLink, Outlet } from 'react-router-dom';
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
        <NavLink to="/" className={styles.link}><h1 className={styles.navitem}>Home</h1></NavLink>
        <NavLink to="/about" className={styles.link}><h1 className={styles.navitem}>About us</h1></NavLink>
        <NavLink to="contact" className={styles.link}><h1 className={styles.navitem}>Contact us</h1>
        </NavLink>
        
        <span style={{display:"flex"}}>
        <NavLink to="login" className={styles.link}><h1 className={styles.navitem}>Signin</h1></NavLink>
        <img src={profile} alt='Sign in' className={styles.profileicon} /></span>
        
        
        
        
        <img src={cart} alt="image" className={styles.cartimg} />
        <span className={styles.cartCount}>{count}</span>
        </div>
        <Outlet />
        </nav>
        
    )
}
