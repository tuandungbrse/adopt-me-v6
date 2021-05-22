import { render } from 'react-dom';
import React from 'react';
import SearchParams from './SearchParams';
import { StrictMode } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Details from './Details';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';

const App = (props) => {
  console.log('render in App: ' + JSON.stringify(props));
  const theme = React.useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background:
            'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)',
        }}
      >
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
    </ThemeContext.Provider>
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
