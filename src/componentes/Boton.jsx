//Para agregar el componente se agrega rafc y se autocompleta
const onClick = () =>{
    console.log('click')
}
const Boton = (props) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: props.color }} className="btn">{props.text}</button>
  )
}
export default Boton