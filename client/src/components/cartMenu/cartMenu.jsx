import styles from "./cartMenu.module.css"

const CartMenu = () => {
    return (
        <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.options}>

            </div>
            
            <div className={styles.priceline}></div>

            <button className={styles.btn}>FINALIZAR COMPRA</button>
        </div>
    )

}

export default CartMenu