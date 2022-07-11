import Header from "./componentes/Header"
import Tareas from "./componentes/Tareas"

function App() {
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
      <Tareas />
    </div>
  )
}

export default App
