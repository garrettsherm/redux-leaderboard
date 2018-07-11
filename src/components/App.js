import { connect } from 'react-redux';

import Main from './Main'

import { addUserToLeaderboard, changeUserScore } from '../actions/addUserToLeaderboard';




const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUserToLeaderboard: (user, score) => dispatch(addUserToLeaderboard(user, score)),
  changeUserScore: (user, changeScore) => dispatch(changeUserScore(user, changeScore))
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
