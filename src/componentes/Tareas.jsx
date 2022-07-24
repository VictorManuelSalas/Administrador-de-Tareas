const tareas = [
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
        texto: 'Ir al psicologo',
        fecha: '25 de Julio del 2022',
        terminada: false,
    }
]

const Tareas = () => {
  return (
    //En palabras sencillas, al utilizar map(), podremos convertir un array en uno nuevo, 
    //cuyos valores serán una transformación del primero. Dicha transformación será 
    //efectuada por la función que se utilice en este proceso.
    <>
     {tareas.map((tarea)=>(<h3 key={tarea.id}>{tarea.texto}</h3>))}
    </>
  )
}

export default Tareas