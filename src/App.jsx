import Saludo from "./Saludo";
import ListaTareas from "./ListaTareas"
import Contador from "./Contador";

function App() {
    return (
        <>
        <Saludo name = 'Pepito' />
        <Saludo name = 'Juanito' />
        <ListaTareas />
        <Contador />
        </>
    );
}

export default App;