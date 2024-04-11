import React, { useState } from "react";

function Contador({ cantidadTareas }) {
  const [contador, setContador] = useState(0);

  const handleOneUp = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Cantidad de Tareas: {cantidadTareas}</h2>
      <h2>Contador: {contador}</h2>
      <button onClick={handleOneUp}>+1 al Contador!</button>
    </div>
  );
}

export default Contador;