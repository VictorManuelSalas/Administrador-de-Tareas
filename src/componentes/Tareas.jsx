//Servira para empezar a usar los estados 
//import { useState } from 'react'
//Se importa el componente tarea
import Tarea from "./Tarea"

const Tareas = ({ tareas, onDelete }) => {

  return (
    //En palabras sencillas, al utilizar map(), podremos convertir un array en uno nuevo, 
    //cuyos valores serán una transformación del primero. Dicha transformación será 
    //efectuada por la función que se utilice en este proceso.
    <>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} onDelete={onDelete} />
      ))}
    </>
    //Al componente Tarea se le envia una variable llamada 
    //tarea la cual se le igualo a todos los datos de la tareas del arreglo
  
        //Tambiens e le envia la funcion como se muetra arriba
    )
}

export default Tareas