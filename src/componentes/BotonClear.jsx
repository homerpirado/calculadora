import "../css/BotonClear.css";
function BotonClear(props) {
  return (
    <button className="boton-clear" onClick={() => props.manejarClear()}>
      Clear
    </button>
  );
}
export default BotonClear;
