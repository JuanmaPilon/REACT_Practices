import "./App.css"
import pocahontas from "./pocahontas-carito.jpeg" 
import Botonsitou from "./Botonsito"
import "./index.css"

function Main (props) {
  return <h2 className="Main">Soy {props.name} (La pocahontas)</h2>
};

function ImageComp () {
  const caritoPic = <img src={pocahontas} alt='ImagenCarito'/>;
  return caritoPic;
}

function Header(props) {
  return <h1>Hello, bienvenidos a mi pagina, {props.apodo}</h1>;
}

function App() {
  return (
  <div>
    <Header apodo = "la roba kills!"/>
    <Main name = "Carito"/>
    <ImageComp />
    <Botonsitou />

  </div>
  );
}

export default App;
