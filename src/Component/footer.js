import styles from "../css/footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import insta from "../img/instagram.png";
import twitter from "../img/twitter.png";
import faceB from "../img/facebook.png";
import phoneImage from "../img/pizzeria-template-mobile-app-mockup.png";

export const Footer = () => {
  return (
    <>
      <div className={styles.downLoad}>
        <div className={styles.headingDownload}>
          <div style={{ padding: "40px" , marginTop:"40px"}}>
            <p className={styles.DTitle}>Free DownLoad!</p>
            <p className={styles.app}>DownLoad the App Now!</p>
            <p className={styles.paraApp}>Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida pulvinar ipsum mauris etiam mattis nisl.</p>
            <div style={{ marginTop: "20px" }}>
              <button className={styles.playstore}>Play Store</button>
              <button className={styles.playstore}>App Store</button>
            </div>

          </div>
          <div style={{marginTop:"20px"}}>
            <img src={phoneImage} alt="img" />
          </div>

        </div>
      </div>
      <footer className={styles.footer}>

        <div className={styles.footerContent}>
          <div className={styles.footerCopywrite}>
            <p className={styles.copy}>&copy; 2024 Hungary.com Delivery App</p>
            <p className={styles.all}>All rights reserved.</p>
          </div>
          <div className={styles.common}>
            <p>About us</p>
            <p>Contact us</p>
            <p>FaQs</p>
            <p>Blog</p>
            <p>Team</p>

          </div>
          <div className={styles.common}>
            <p>Terms and Conditions</p>
            <p>Private Policy</p>

          </div>
          <div className={styles.common}>
            <p>We deliver To:</p>
            <p>Sikar</p>
            <p>Fatehpur</p>
            <p>Jaipur</p>
            <p>JhunJhanu</p>
            <p>Churu</p>
          </div>
          <div className={styles.SocialLinks}>

            <p><img src={insta} alt="icon" className={styles.icons}/>
 </p>
            <p><img src={faceB} alt="icon" className={styles.icons} /></p>
            <p><img src={twitter} alt="icon" className={styles.icons} /></p>
          </div>
        </div>
      </footer>
    </>

  )
}