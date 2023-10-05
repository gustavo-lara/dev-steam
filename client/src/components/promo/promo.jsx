import styles from "./promo.module.css";



const Promo = ({ poster, desc, precoa, preco }) => {

    return (
        <div className={styles.card}>
            <img src={poster} alt="" />
            <h3>OFERTA EXCLUSIVA</h3>
            <div className={styles.box}>
                <div className={styles.desc}>
                    <p>-{desc}%</p>
                </div>
                <div className={styles.preco}>
                    <p>{precoa}R$</p>
                    <h4>{preco}R$</h4>
                </div>
            </div>

            <button className={styles.addCar}>
                <p>ADICIONAR AO CARRINHO</p>
            </button>
        </div>
    


    )
}

export default Promo;