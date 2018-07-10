import { connect } from 'react-redux';

import Main from './Main'

import { addUserToLeaderboard } from '../actions/addUserToLeaderboard';




const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUserToLeaderboard: (user, score) => dispatch(addUserToLeaderboard(user, score))
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
