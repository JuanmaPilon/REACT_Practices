function  Animals() {

    const animals = ["Lion", "Tiger", "Elephant", "Monkey", "Giraffe", "Lemon"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>);

  const filteredAnimalsList = animals
    .filter((animal) => animal.startsWith("L"))
    .map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals:</h1>
      <ul>
        {filteredAnimalsList}
      </ul>
    </div>
  );
}

export default Animals;