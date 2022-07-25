import Header from "./componentes/Header"
import Tareas from "./componentes/Tareas"
import { useState } from 'react'

function App() {
  //Los estados se definen con un arreglo que tiene el nombre del estado y su seter
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: 'Ir al doctor',
      fecha: '5 de Julio del 2022',
      terminada: true,
    },
    {
      id: 2,
      texto: 'Ir al cine',
      fecha: '15 de Julio del 2022',
      terminada: false,
    },
    {
      id: 3,
      texto: 'Ir al teibol',
      fecha: '25 de Julio del 2022',
      terminada: false,
    }
  ])

  //Funcion para eliminar una tarea al dar clic a la x
  //Esta funicon obtiene el valor de id
  const deleteTarea = (id) => {
    //Esto es porque no se puede leiminar datos que nosotros tenemos en el code 
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }//Esto va filtrar las tareas que son diferentes al id que se ando

  //Los componentes se crean siempre con mayuscula la primera letra
  return (
    //Aqui se agragaran todos los componentes para que se muestren en la pagina
    //Los omponentes se mandan a hablar como se muestra el Header y los props se hacen,
    //poniendo un nombre y darle un valor entre comillas simples.
    /*<>
      <Header titulo='Administrador de Tareas' nombre='Victor' edad={22} />
    </>*/
    <div className="container">
      <Header titulo='Administrador de Tareas' />
      {tareas.length > 0 ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado} />) : ('No hay Tareas para mostrar')}
    </div>
    )
}
 /*Ahi se declara una condicion el cual dice que si  la longitud de la tarea es mayor a 0 que muestre las tareas sino que muestre el texto
    En Tareas se mandan todos los datos de la bd mediante esa forma que se muetra en la etiqueta de Tarea
    TAMBIEN SE LE PASA LA FUNCION deleteTareas mediante un atributo onDelete */
 
export default App
