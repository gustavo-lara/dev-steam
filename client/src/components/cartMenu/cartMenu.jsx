import CartOption from "../cartOption/cartOption"
import gta from "../../assets/gtaV.jpg"
import red from "../../assets/red.jpg"
import forza from "../../assets/forza5.jpg"

import styles from "./cartMenu.module.css"

const CartMenu = () => {
    return (
        <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.options}>
                <CartOption nome={"GTA V"} img={gta} preco={"R$84,00"}></CartOption>
                <CartOption nome={"FORZA 5"} img={forza} preco={"R$70,00"}></CartOption>
                <CartOption nome={"RDR II"} img={red} preco={"R$84,60"}></CartOption>
            </div>
            <div className={styles.total}>
                <h3>Total</h3>
                <h2>R$238,60</h2>
            </div>
            <div className={styles.priceline}></div>
            <button className={styles.btn}>FINALIZAR COMPRA</button>
        </div>
    )

}

export default CartMenu