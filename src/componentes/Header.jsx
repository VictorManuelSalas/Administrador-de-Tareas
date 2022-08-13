/*
//Esto se hace para definir que tipo de datos seran los props
import PropTypes from 'prop-types'
Header.prototype = {
    //Aqui se dice que el prop titulo sera de tipo string, el isRequired no es necesario
    //solo se puso como ejemplo de un promp requerido a fuerzas
    titulo: PropTypes.string.isRequired

}

//Asi se pueden crear4 estilos propios en react
const estilos = {
    color: 'red', 
    background: 'blue'
}
//Pa agregarlo al h1 se debe de poner en style={estilos}
*/
import Boton from "./Boton"
//Hay dos formas de llamar a los props, una es poniendo en la funcion en sus () el elemento destructurando entre llaves
//por ejemplo, const Header = ({titulo}) =>. Y en el h1 ya no abra necesidad de poner el {props.} solo quedaria como {titulo}
const Header = ({ titulo, onAdd, showAdd }) => {


    return (
        /*Aqui se pueden agregar estilos como se muestra en el sig ejemplo */
        /*
        <>
            <h1 style={{color:'white', background:'blue', textAlign:'center'}}>Administrador de Tareas, {props.titulo}, {props.nombre} con edad de {props.edad}</h1>
        </>
        */
       <header className='header'>
            <h2>{titulo}</h2>
            <Boton color={showAdd ? 'red' : 'green'} text={showAdd ? 'Cerrar' : 'Nueva'} onClick={onAdd}/>
            </header>
    )
}

export default Header