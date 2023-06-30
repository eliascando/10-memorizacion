import { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]); 
    const [contador, setContador] = useState(100);

    const guardarTareas = e =>{
        e.preventDefault();
        let tareaNueva = e.target.descripcion.value;

        if(tareaNueva != ""){
            setTareas( tarea => [...tarea, tareaNueva]);
        }
    };

    const borrarTarea = id => {
        //filtrar las tareas para borrar la que no quiero
        let nuevasTareas = tareas.filter((tarea, indice) => indice !== id);

        //set state, guardar el nuevo listado de tareas en el estado
        setTareas(nuevasTareas);
    };
    const sumarAlContador = () =>{
        setContador(contador + 1);
    };

    const contadoresPasados = (acumulacion) =>{
        for(let i = 0; i <= acumulacion; i++){
          console.log("Ejecutando acumulacion de contadores del pasado...")  
        }

        return `Contador manual de tareas: ${acumulacion}`;
    };

    const memoContadores = useMemo(()=> contadoresPasados(contador), [contador]);

  return (
    <div>
        <h1>Mis Tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type="text" name="descripcion" placeholder='Describe la tarea'/>
            <input type="submit" value="Guardar" />
        </form>
        <h3>{memoContadores}</h3>
        <button onClick={sumarAlContador}>Sumar</button>
        <h3>Lista de tareas</h3>
        <ul>
            {
                tareas.map( (tarea, indice) => {
                    return (
                        <li key={indice}>
                            {tarea} 
                            <button onClick={ indice => borrarTarea(indice)}>X</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}