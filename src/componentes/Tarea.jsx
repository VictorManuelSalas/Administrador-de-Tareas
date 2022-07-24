//Este componente solo mostrara solo una tarea 
//Aqui se importa el icono que queremos y desde la carpeta de react icons y la carpeta de ese icono
import { FaTimes } from 'react-icons/fa'

const Tarea = ({ tarea, onDelete }) => {
    return (
        <div className='task'>
            <h3>{tarea.texto} <FaTimes style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{tarea.fecha}</p>
        </div>
    )
}

export default Tarea