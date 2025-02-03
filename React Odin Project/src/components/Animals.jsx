function  Animals() {

    const animals = ["Lion", "Tiger", "Elephant", "Monkey", "Giraffe"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals:</h1>
        <ul>
            {animalsList}
        </ul>
    </div>
  );
}

export default Animals;