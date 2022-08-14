import React from 'react'

const AddTarea = ( { onAdd } ) => {
    //Modificacion de estados que son arreglos, pa cada input con useState que se inicializara con un string vacio
    const [texto, setTexto] = React.useState('');
    const [fecha, setFecha] = React.useState('');
    //Este es false por que es boleano el input terminado
    const [terminada, setTerminada] = React.useState(false);

    //Los estados se les pasan a los inputs con el valor value e igualarlos a la variable primera del arreglo de los estados
    //con eso el input no permitira agregar texto por lo cual se debe de generar un atributo onChange(cuando se cambia el estado) en el cual habra una funcion de
    //flecha que recibe una variable e,  esta funcion ara que se le de el texto que se agregue al input a la variable setTexto del arreglo
    // ------e.target.value es para recibir todo lo que se escriba, la e recibe el texto y el target.value es definirlo a la nueva variable del arreglo del estado
  
    //Funcion onSubmit recibe los valores y los mete en el variable e
    const onSubmit = (e) => {
        //Este es para que no se refresque la pagina mediante el formulario
        e.preventDefault()

        if(!texto){
            return alert('Por favor ingres el texto')
        }

        //Se le pasan los datos estructurados al atributo onAdd o el prop recibido de app.jsx
        onAdd({texto, fecha, terminada})

        //Para resetear el formulario al hacer submit se le da valores vacios a los seters
        setTexto('');
        setFecha('')
        setTerminada(false);
    }
    //En el form al hacer submit se ejecutara la funicon de arriba llamada onSubmit
    return (
    <form onSubmit={onSubmit}  className='add-form'>
        <div className='form-control'>
            <label>Tareas</label>
            <input type='text' placeholder='Nombre de la tarea ' value={texto} onChange={ (e) => setTexto(e.target.value) } ></input>
        </div>
        <div className='form-control'>
            <label>Fecha</label>
            <input type='date' placeholder='Fecha' value={fecha} onChange={ (e) => setFecha(e.target.value)} ></input>
        </div>
        <div className='form-control form-control-check'>
            <label>Terminada</label>
            <input type='checkbox' checked={terminada} value={terminada} onChange={ (e) => setTerminada(e.currentTarget.checked) }></input>
        </div>
        <input className='btn btn-block' type='submit' value='Agregar Tarea'></input>
    </form>
  )
}

export default AddTarea