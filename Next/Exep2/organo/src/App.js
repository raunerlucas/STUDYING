import Banner from './components/Banner';
import { Formulario } from './components/Formulario';
import {useState} from "react";


function App() {
    const [colbs, setColbs] = useState([])

    const addColab = (colb) => {
        setColbs([...colbs,colb])
    };

    return (
    <div>
      <Banner />
      <Formulario aoColaboradorCtd={cold => addColab(cold)} />
    </div>
  );
}

export default App;
