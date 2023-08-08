import "./App.css";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";
import Pantalla from "./componentes/Pantalla";
import logo from "./imagenes/logo.png";
import { useState } from "react";
import { evaluate } from "mathjs";
function App() {
  const [estado, setEstado] = useState("");
  const agregarEstado = (val) => {
    setEstado(estado + val);
  };

  const calcular = () => {
    if (estado) {
      setEstado(evaluate(estado));
    } else {
      setEstado("INTRODUZCA VALORES");
    }
  };

  return (
    <div className="App">
      <div className="logoContenedor">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      <div className="contendedorCalculadora">
        <Pantalla estado={estado} />

        <div className="fila">
          <Boton manejarClick={agregarEstado}>1</Boton>
          <Boton manejarClick={agregarEstado}>2</Boton>
          <Boton manejarClick={agregarEstado}>3</Boton>
          <Boton manejarClick={agregarEstado}>+</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarEstado}>4</Boton>
          <Boton manejarClick={agregarEstado}>5</Boton>
          <Boton manejarClick={agregarEstado}>6</Boton>
          <Boton manejarClick={agregarEstado}>-</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={agregarEstado}>7</Boton>
          <Boton manejarClick={agregarEstado}>8</Boton>
          <Boton manejarClick={agregarEstado}>9</Boton>
          <Boton manejarClick={agregarEstado}>*</Boton>
        </div>

        <div className="fila">
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarEstado}>0</Boton>
          <Boton manejarClick={agregarEstado}>.</Boton>
          <Boton manejarClick={agregarEstado}>/</Boton>
        </div>

        <div className="fila">
          <BotonClear manejarClear={() => setEstado("")} />
        </div>
      </div>
    </div>
  );
}

export default App;
