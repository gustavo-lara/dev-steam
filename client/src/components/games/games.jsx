import styles from "./games.module.css"


const Games = ({img, nome, gen, preco}) => {
    return(
        <div className={styles.games}>
            <img src={img} alt="" />
        <div>
            <h3>{nome}</h3>
            <h4>{gen}</h4>
            <h2>R${preco}</h2>
            </div>
            <button className={styles.addCar}>
                <p>ADICIONAR AO CARRINHO</p>
            </button>
            </div>
    )
}

export default Games