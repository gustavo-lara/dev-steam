import styles from "./menu.module.css";
import logo from "../../assets/logo.png";
import CartButton from "../cartButton/cartButton";


const Menu = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}> <img src={logo} alt="" /> </div>
      <div className={styles.devSteam}> DevSteam </div>
      <div className={styles.search}> <input type="text" placeholder="Buscar" /> </div>
      <CartButton/>
    </div>
  );
};


export default Menu;