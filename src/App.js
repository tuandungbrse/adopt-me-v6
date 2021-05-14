import React from 'react';
import ReactDOM from 'react-dom';

import Pet from './Pet';

const App = (props) => {
  console.log(props);
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(
      Pet,
      { name: 'Ga Choi 1', animal: 'Ga', breed: 'Ga troi' },
      '1'
    ),
    React.createElement(Pet, {
      name: 'Khon Kiep',
      animal: 'Cho',
      breed: 'Cho Soi Bac Cuc',
    }),
    React.createElement(Pet, {
      name: 'Con Lon',
      animal: 'Su tu',
      breed: 'Su Tu Chau Pho',
    })
  );
};

ReactDOM.render(
  React.createElement(App, { id: 'hello word' }, 'hehehe'),
  document.getElementById('root')
);
