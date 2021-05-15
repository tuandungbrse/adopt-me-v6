import { render } from 'react-dom';

import Pet from './Pet';
import SearchParams from './SearchParams';

const App = (props) => {
  console.log('render in App: ' + JSON.stringify(props));
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));
