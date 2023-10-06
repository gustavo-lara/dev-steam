import "./App.css";
import gta from "../assets/gtaV.jpg";
import forza from "../assets/forza5.jpg"
import red from "../assets/red.jpg"
import mine from "../assets/mine.jpg"
import ark from "../assets/ark.jpg"
import eafc from "../assets/eafc.jpg"
import resident from "../assets/resident.jpg"
import creed from "../assets/creed.jpg"
import horizon from "../assets/horizon.jpg"

import Menu from "../components/menu/menu";
import Promo from "../components/promo/promo";
import Games from "../components/games/games";
// import car from "../components/car/car"
// import games from "../components/games/games"


const App = () => {

  return (
    <div>
      <Menu></Menu>
      <div className="promo">
        <div className="titulo"><p>PROMOÇÕES</p></div>
        <div className="cards">
          <Promo poster={gta} desc={"20"} precoa={"105,00"} preco={"84,00"}></Promo>
          <Promo poster={forza} desc={"30"} precoa={"100,00"} preco={"70,00"}></Promo>
          <Promo poster={red} desc={"55"} precoa={"188,00"} preco={"84,60"}></Promo>
        </div>
      </div>

      <div className="games">
        <div className="titulo"><p>OUTROS JOGOS</p></div>
        <div className="game">
          <Games img={mine} nome={"MINECRAFT DELUXE"} gen={"Mundo aberto, Multijogador"} preco={"169,00"}></Games>
          <Games img={ark} nome={"ARK SURVIVAL ENVOLVED"} gen={"Ação, Mundo aberto, Multijogador, Dinossauros"} preco={"179,90"}></Games>
          <Games img={eafc} nome={"EAFC24"} gen={"Esportes"} preco={"319,00"}></Games>
          <Games img={resident} nome={"RESIDENT EVIL VILLAGE"} gen={"Terror, Suspense"} preco={"179,99"}></Games>
          <Games img={creed} nome={"ASSASSIN'S CREED"} gen={"Ação, Mundo Aberto"} preco={"119,99"}></Games>
          <Games img={horizon} nome={"HORIZON"} gen={"Ação, Mundo Aberto"} preco={"87,91"}></Games>

        </div>
      </div>


      <div>

      </div>
    </div>
  )

}

export default App;