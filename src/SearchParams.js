import React from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

function SearchParams(props) {
  console.log('render in search-params: ' + JSON.stringify(props));

  const [location, setLocation] = React.useState('Seattle, WA');
  const [animal, updateAnimal] = React.useState('');
  const [breed, updateBreed] = React.useState('');
  const breeds = [];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
