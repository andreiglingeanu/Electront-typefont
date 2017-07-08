import React from 'react';
import ReactDOM from 'react-dom';
// import electron from 'electron';
import { Typefont } from '../TypeFont/src/index.js';

ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

// let dialog = electron.remote.dialog;
// let image = dialog.showOpenDialog({
//   properties: ['openFile', 'openDirectory', 'multiSelections'],
// })[0];
// console.log(image);
Typefont('/Users/Damon/Desktop/business_bookcover.png').then(res =>
  console.log('the data we want', res)
);
//
