import styles from "./menu.module.css";
import logo from "../../assets/logo.png";
import iconCar from "../../assets/iconCar.svg";


const Menu = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}> <img src={logo} alt="" /> </div>
      <div className={styles.devSteam}> DevSteam </div>
      <div className={styles.search}> <input type="text" placeholder="Buscar" /> </div>
      <div target="_blank" onClick={"#"} className={styles.iconCar}> <img src={iconCar} alt="" /> </div>
    </div>
  );
};


export default Menu;