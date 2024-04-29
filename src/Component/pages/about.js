import styles from '../../css/about.module.css';
import restro from "../../img/restro.jpeg"
import cofee from "../../img/cofee.jpeg";
import beer from "../../img/item18.jpeg";
import cup from "../../img/cup.jpeg";
import cafe from "../../img/cafe.jpeg";
import food from "../../img/food.jpeg";


export const About = () => {
    return (
        <>
            <p className={styles.about}>
            </p>
            <div style={{ backgroundColor: "aliceblue" }}>

                <h1 className={styles.TitleAbout}>About</h1>
                <p className={styles.para}>Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.</p>
                <div>
                    <p className={styles.Heading}>Who We Are</p>
                    <p className={styles.des}>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.</p>

                </div>
                <div className={styles.aboutContent}>

                    <img class={styles.imgRes} src={restro} alt="image" />
                    <div>
                        <h1 style={{ marginTop: "30px", fontSize: "50px" }}>A Few Words About Us</h1>
                        <p className={styles.aboutDes}>Serving Best Bbq And Steaks Since 2024</p>
                        <br /><br /><br />
                        <p className={styles.aboutPara}>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
                        <button className={styles.btn}>View Menu</button>
                    </div>
                </div>
                <div className={styles.PhotoContainer}>
                    <div className={styles.content}>
                        <p style={{ fontSize: "30px", fontWeight: "300" }}>Our Restaurant Is A Collective Of Amazing People Striving To Build Delightful Italian Cuisine.</p>
                        <br /><br /><br />
                        <p style={{ color: "#313338", fontSize: "18px", lineHeight: "20px" }}>Lectus fringilla occaecat iste pretium fugiat convallis a, veniam conubia qui leo quod sodales! Nemo hendrerit laborum, error! Reiciendis, voluptas officiis, placerat ratione blanditiis! Habitasse dui proin cupidatat fringilla, ipsum dolor quidem, convallis nam, nulla quis optio, iure pellentesque sociosqu saepe explicabo similique placeat odit tempore tenetur litora, impedit sollicitudin mus deleniti, recusandae anim quo.</p>
                        <br /><br />
                        <p style={{ color: "#313338", fontSize: "18px", lineHeight: "20px" }}><b style={{ color: "orangered", fontWeight: "600", fontSize: '30px' }}>R</b>el nulla pulvinar montes suspendisse, turpis. Elementum nibh, autem nulla ullam, proident, hac ratione platea! Libero nam, harum quisque turpis fames sollicitudin blanditiis est aliquam aptent blandit class, occaecat! Fames.</p>
                        <br /><br /><br />
                        <button className={styles.btn}>More Details</button>
                    </div>
                    <div className={styles.photos}>
                        <div className={styles.horizontal}>
                            <img src={cafe} alt="phot0" className={styles.cafe} />

                            <img src={beer} alt="phot0" className={styles.beer}/>
                        </div>
                        <div className={styles.photosFrame}>
                            <img src={cofee} alt="phot0" className={styles.cof} />
                            <img src={food} alt="phot0"  className={styles.food} />
                            <img src={cup} alt="phot0" className={styles.cup}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}