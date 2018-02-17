import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './ducky';
import registerServiceWorker from './registerServiceWorker';

require('font-awesome/css/font-awesome.min.css')

const Comp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(<Comp/>, document.getElementById('root'));
registerServiceWorker();
