import "../css/BotonClear.css";
function BotonClear(props) {
  return (
    <div className="boton-clear" onClick={() => props.manejarClear()}>
      Clear
    </div>
  );
}
export default BotonClear;
