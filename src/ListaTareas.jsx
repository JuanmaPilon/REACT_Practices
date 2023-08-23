function ListaTareas() {
    const tareas = ['Hacer compras', 'Estudiar Programacion', 'Salvar el semestre', 'Hacer ejercicio'];


return (
    <div>
        <h1>Lista de las tareas</h1>
        <ul>
            {tareas.map((tarea, index) => (<li key={index}>{tarea}</li>))}
        </ul>
    </div>
    );
 }

 export default ListaTareas;