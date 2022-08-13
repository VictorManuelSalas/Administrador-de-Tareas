//Para agregar el componente se agrega rafc y se autocompleta

const Boton = (props) => {
  return (
    <button onClick={props.onClick} style={{ backgroundColor: props.color }} className="btn">{props.text}</button>
  )
}
export default Boton