import React from "react";

function ListaTareas({cantidadTareas, setCantidadTareas}) {
    const tareas = ['Hacer compras', 'Estudiar Programacion', 'Salvar el semestre', 'Hacer ejercicio'];

    const agregarTarea = () => {
        setCantidadTareas(cantidadTareas + 1);
    };

return (
    <div>
        <h1>Lista de las tareas</h1>
        <h2>Cantidad de tareas actualmente: {cantidadTareas}</h2>
        <button onClick={agregarTarea}>Agrega una tarea!</button>
        <ul>
            {tareas.map((tarea, index) => (<li key={index}>{tarea}</li>))}
        </ul>
    </div>
    );
 }

 export default ListaTareas;