import { useEffect, useState } from "react"
import { Empleados } from "./Empleados"

export const Gestion = () => {

    const [nombre, setNombre] = useState("");
    const [pagina, setPagina] = useState(1);

    const asignarGestor = e => {
        setNombre(e.target.value);
    };

    useEffect(()=>{
        console.log("Vista de Gestion actualizada!!");
    },[nombre,pagina]);

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type="text" onChange={asignarGestor} placeholder="Ingrese su nombre"/>

        <h2>Listado de empleados:</h2>
        <p>Los usuarios son gestionados por {nombre}</p>
        <Empleados pagina={pagina}/>
        <button onClick={()=>{ setPagina(1) }}>Pagina 1</button>
        <button onClick={()=>{ setPagina(2) }}>Pagina 2</button>
    </div>
  )
}