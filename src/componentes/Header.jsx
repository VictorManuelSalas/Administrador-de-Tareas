/*
//Esto se hace para definir que tipo de datos seran los props
import PropTypes from 'prop-types'
Header.prototype = {
    //Aqui se dice que el prop titulo sera de tipo string, el isRequired no es necesario
    //solo se puso como ejemplo de un promp requerido a fuerzas
    titulo: PropTypes.string.isRequired

}
*/

//Hay dos formas de llamar a los props, una es poniendo en la funcion en sus () el elemento destructurando entre llaves
//por ejemplo, const Header = ({titulo}) =>. Y en el h1 ya no abra necesidad de poner el {props.} solo quedaria como {titulo}
const Header = (props) => {

    return (
        /*Aqui se pueden agregar estilos como se muestra en el sig ejemplo */
        <>
            <h1 style={{color:'white', background:'blue', textAlign:'center'}}>Administrador de Tareas, {props.titulo}, {props.nombre} con edad de {props.edad}</h1>
        </>
    )
}

export default Header