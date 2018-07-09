import { connect } from 'react-redux';

import Main from './Main'

import { firstAction } from '../actions/firstAction';

import { secondAction } from '../actions/secondAction';


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  firstAction: () => dispatch(firstAction()),
  secondAction: () => dispatch(secondAction())
});

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
