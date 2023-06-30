import './App.css'
import { Tareas } from './components/Tareas'
//import { Gestion } from './components/Gestion'

function App() {
  return (
    <>
     {/*Ejercicio con hook useMemo*/}
     <Tareas/> 

     {/*Ejercicio con metodo memo para componentes*/}
     {/*<Gestion/>*/}
    </>
  )
}

export default App