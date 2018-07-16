// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Redux Store
import store from './store';

// js libraries
import 'bootstrap';

// Styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';



//Components
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

//Pass Provider redux store
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
