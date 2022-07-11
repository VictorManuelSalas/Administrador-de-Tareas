import Header from "./componentes/Header"

function App() {
 //Los componentes se crean siempre con mayuscula la primera letra
  return (
    //Aqui se agragaran todos los componentes para que se muestren en la pagina
    //Los omponentes se mandan a hablar como se muestra el Header y los props se hacen,
    //poniendo un nombre y darle un valor entre comillas simples.
    
    <>
      <Header titulo='hola soy un prop y fui creado por' nombre='Victor' edad={22} />
    </>
  )
}

export default App
