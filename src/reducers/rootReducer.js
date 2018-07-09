import { combineReducers } from 'redux';
import firstReducer from './firstReducer';

// Combine all reducers 
const rootReducer = combineReducers({ firstReducer });

export default rootReducer;
