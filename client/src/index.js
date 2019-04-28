import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { Provider } from './components/Provider';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
