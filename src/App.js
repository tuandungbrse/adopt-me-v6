import { render } from 'react-dom';

import Pet from './Pet';

const App = (props) => {
  console.log('render in App: ' + props);
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna 1" animal="Dog" breed="Asia" />
      <Pet name="Luna 2" animal="Bird" breed="US" />
      <Pet name="Luna 3" animal="Fish" breed="ES" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
