import React, { useState } from "react";
import Saludo from "./Saludo";
import ListaTareas from "./ListaTareas"
import Contador from "./Contador";

function App() {
    const [cantidadTareas, setCantidadTareas] = useState(0);

    return (
        <>
        <Saludo name = 'Pepito' />
        <Saludo name = 'Juanito' />
        <ListaTareas cantidadTareas={cantidadTareas} setCantidadTareas={setCantidadTareas} />
        <Contador cantidadTareas={cantidadTareas}/>
        </>
    );
}

export default App;