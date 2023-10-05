import CartMenu from "../cartMenu/cartMenu"
import styles from "./cartButton.module.css"
import iconCar from "../../assets/iconCar.svg";
import { useState } from "react";


const CartButton = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.cartButton} onClick={() => setOpen(!open)}>
            <div className={styles.iconCar}> <img src={iconCar} alt="" /> </div>
            {open && <CartMenu />}

        </div>
    )
}

export default CartButton