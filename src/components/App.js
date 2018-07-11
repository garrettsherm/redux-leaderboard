import { connect } from 'react-redux';

import Main from './Main'

import { addUserToLeaderboard, changeUserScore, removeUserFromLeaderboard } from '../actions/leaderboardActions';




const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUserToLeaderboard: (user, score) => dispatch(addUserToLeaderboard(user, score)),
  changeUserScore: (user, changeScore) => dispatch(changeUserScore(user, changeScore)),
  removeUserFromLeaderboard: (user) => dispatch(removeUserFromLeaderboard(user))
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
