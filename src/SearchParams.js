import React from 'react';

function SearchParams(props) {
  console.log('render in search-params: ' + JSON.stringify(props));

  const [location, setLocation] = React.useState('Seattle, WA');

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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
