// Node Module
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers/rootReducer';

// Initial State
const initState = {
	firstReducer: {
		testing: "initial state test works"
	}
};

// Create the redux store
const store = createStore(rootReducer, initState, applyMiddleware(thunk));

export default store;