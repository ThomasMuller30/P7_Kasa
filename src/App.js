import KasaRouter from "./components/KasaRouter"
import { useEffect, useState } from "react"



function App() {
  const [logements, setLogements] = useState([])

  useEffect ( () => {
    fetch('/logements.json')
      .then( (response) => response.json() )
      .then( (logements) => {setLogements(logements)} )
  }, [] )

  return (
    <>
      <KasaRouter logements={logements}/>
    </>
  );
}

export default App;
