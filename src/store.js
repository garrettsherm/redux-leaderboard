// Node Module
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers/rootReducer';

// Initial State
const initState = {
	leaderboard: [
		{user: 'person1', score: 0.0}
	]
};

// Create the redux store
const store = createStore(rootReducer, initState, applyMiddleware(thunk));

export default store;