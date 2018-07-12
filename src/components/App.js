import { connect } from 'react-redux';

import Main from './Main'

import { addUserToLeaderboard, changeUserScore, removeUserFromLeaderboard } from '../actions/leaderboardActions';




const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addUserToLeaderboard: (user, score) => dispatch(addUserToLeaderboard(user, score)),
  changeUserScore: (user, changeScore, index) => dispatch(changeUserScore(user, changeScore)),
  removeUserFromLeaderboard: (user, index) => dispatch(removeUserFromLeaderboard(user, index))
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
