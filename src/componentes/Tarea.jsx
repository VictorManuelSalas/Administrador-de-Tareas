//Este componente solo mostrara solo una tarea 
//Aqui se importa el icono que queremos y desde la carpeta de react icons y la carpeta de ese icono
import { FaTimes } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete, onToggle }) => {
    return (
        //Se le asigna al icono la funcion onDelete mediante un onClick
        //Y se le pasa a la funcion onDelete el atributo id
        //En class name se agrega el codigo entre la comillas invertidas, se pasa la clase task y pregunta que 
        //si TAREA.TERMINADA ES TRUE entonces que ponga la clase terminado y si no qeu no ponga nada
        <div className={`task ${tarea.terminada ? 'terminado' : ' '}`} onDoubleClick={() => onToggle(tarea.id)}>
            <h3>{tarea.texto} <FaTimes onClick={() => onDelete(tarea.id) } style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{tarea.fecha}</p>
        </div>
    )
}

export default Tarea


