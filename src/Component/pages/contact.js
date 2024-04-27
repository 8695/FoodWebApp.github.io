import React from 'react'; // Import React
import styles from "../../css/contact.module.css"; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    < div style={{backgroundColor:"rgb(187, 210, 230)"}}>
      <h1 className={styles.heading}>Contact for Any Query</h1>
    <div className={styles.contact}> 
      <div className={styles.details}>
        <h1 className={styles.title}>Contact info</h1>
        <p className={styles.info1}><FontAwesomeIcon icon={faEnvelope}/> &nbsp;&nbsp;contact@hungary.com</p>
        <p className={styles.info2}><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+91-9965235647</p>
        <p className={styles.open}>Opening Hour</p>
        <p className={styles.time}>Monday-friday-- 8:00am - 11:00pm</p>
        <p className={styles.time2}>Saturday-Sunday-- 8:00am - 5:00pm</p>
      </div>
      <div className={styles.form}>
        <form>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            id="username"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
          />
          <label htmlFor="Phone">Phone:</label>
          <textarea // Changed from textarea to input for Phone
            type="Phone"
            id="phone"
            rows="5"
            cols="40"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};
