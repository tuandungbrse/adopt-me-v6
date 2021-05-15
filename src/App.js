import { render } from 'react-dom';

import SearchParams from './SearchParams';
import { StrictMode } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Details from './Details';
import ErrorBoundary from './ErrorBoundary';

const App = (props) => {
  console.log('render in App: ' + JSON.stringify(props));
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/details/:id">
          <ErrorBoundary>
            <Details />
          </ErrorBoundary>
        </Route>
        <Route exact path="/">
          <SearchParams />
        </Route>
      </Switch>
    </div>
  );
};

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
