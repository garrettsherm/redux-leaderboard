import { combineReducers } from 'redux';
import leaderboard from './leaderboard';

// Combine all reducers 
const rootReducer = combineReducers({ leaderboard });

export default rootReducer;
