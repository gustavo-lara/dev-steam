
import styles from "./cartOption.module.css"

const CartOption = ({ img, nome, preco, onRemove }) => {
    return (
        <div className={styles.option}>
            <img src={img} alt={nome} width={62} height={74} />
            <div className={styles.info}>
                <h3>{nome} </h3>
                <h2>{preco}</h2>
                <p>Remover</p>
            </div>
        </div>
    )
}

export default CartOption