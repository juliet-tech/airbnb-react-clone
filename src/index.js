import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Allows us to be able to have the CSS right in the JS so that in development mode you don't need to be switching between screens and browser behavior.
import App from './App'; // ./ -> current folder
import * as serviceWorker from './serviceWorker';

import Hello from './components/hello';

const bye = <div><Hello firstName='Nonica' lastName='Chevalier' />
              <Hello firstName='Monca' lastName='Chevalier' /></div>;

ReactDOM.render(<Hello firstName='Juliette' lastName='Chevalier' />, document.getElementById('root'));
ReactDOM.render(bye, document.getElementById('root')); // Can also do this and it will work. Because these are both addressing the element #root, only the last one gets executed

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
