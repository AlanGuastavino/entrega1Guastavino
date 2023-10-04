import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <div className="QuantumPc">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />
      <CartWidget />
    </div>
  );
}

export default App;
