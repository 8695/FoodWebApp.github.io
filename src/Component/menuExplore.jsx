import styles from '../css/MenuExplore.module.css';
import { data } from "./data";

export const MenuExplore = () => {
    return (
        <div className={styles.MenuCart}>
            <div className={styles.Menulist}>
            {data.map((dt, id) => (
                <div key={id} className={styles.MenulistItem}>
                    <img src={dt.img} alt="img" />
                    <p className={styles.title}>{dt.title}</p>
                </div>
            ))}
            </div>
            <hr />
        </div>
    );
};
