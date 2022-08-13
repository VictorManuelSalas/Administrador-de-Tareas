import Header from "./componentes/Header"
import Tareas from "./componentes/Tareas"
import AddTarea from "./componentes/AddTarea"
import SinTareas from "./componentes/SinTareas"
import { useState } from 'react'

function App() {
  //Estado para mostrar el formulario
  const [showAddTarea, setShowAddTarea] = useState(false)

  //Los estados se definen con un arreglo que tiene el nombre del estado y su seter
  //Aqui se almacenaran todas las tareas con su nombre, fecha, id y estatus(terminado / pendiente)
  const [tareas, setTareas] = useState([]);

  //Agregar Tarea
  const addTarea = (tarea) => {
    //Se genere un id nuevo, que se genera un numero grande pa no repetirse
    const id = Math.floor(Math.random() * 10000) + 1
    
    //Este genera la nueva tarea dandole el nuevo id y agregandole todos los datos que se obtienen de la variable tarea
    const nuevaTarea = { id, ...tarea }
    //Se mete a la base con setTareas, se le pasan las tareas existentes y la nueva que se creo
    setTareas([...tareas, nuevaTarea])
    console.log(id)

  }

  //Funcion para eliminar una tarea al dar clic a la x
  //Esta funicon obtiene el valor de id
  const deleteTarea = (id) => {
    //Esto es porque no se puede eliminar datos que nosotros tenemos en el code 
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }//Esto va filtrar las tareas que son diferentes al id que se ando

  //Toggle terminado
  const toggleTerminado = (id) => {
    //El map ara un recorido por todos y preguntara que si el id es igual a el id de alguna tarea y al ser match entonces le ase una copia de las base 
    //y a la propiedad terminada que tiene el objeto, lo cambiara su valor que tiene actualmente por un diferente con el ! y sino es el id igual entonces no hace nada 
    setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea))
  }
  //Los componentes se crean siempre con mayuscula la primera letra
  return (
    //Aqui se agragaran todos los componentes para que se muestren en la pagina
    //Los omponentes se mandan a hablar como se muestra el Header y los props se hacen,
    //poniendo un nombre y darle un valor entre comillas simples.
    /*<>
      <Header titulo='Administrador de Tareas' nombre='Victor' edad={22} />
    </>*/
    //En el header el atributo onAdd es para mostrar/ocultar el form  y el atributo showadd es para poner el boton en agregar/cerrar      
    <div className="container">
      <Header titulo='Administrador de Tareas' onAdd={()=>setShowAddTarea(!showAddTarea)} showAdd={showAddTarea} />
      {showAddTarea && <AddTarea onAdd={addTarea} />}
      {tareas.length > 0 ? (<Tareas tareas={tareas} onDelete={deleteTarea} onToggle={toggleTerminado} />) : (<SinTareas />)}

    </div>
  )
}
/*En el showaddtareas tiene && esto es una condicion if sin el else, si pusieramos ? en vez del & entonces tenemos que poner el : que sig el else */

/*Ahi se declara una condicion el cual dice que si  la longitud de la tarea es mayor a 0 que muestre las tareas sino que muestre el texto
   En Tareas se mandan todos los datos de la bd mediante esa forma que se muetra en la etiqueta de Tarea
   TAMBIEN SE LE PASA LA FUNCION deleteTareas mediante un atributo onDelete */

export default App
