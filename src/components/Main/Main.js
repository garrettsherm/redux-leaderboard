import React, { Component } from 'react';

import Leaderboard from '../Leaderboard';

import AddPerson from '../AddPerson';
import EditScore from '../EditScore';
import RemovePerson from '../RemovePerson';



class Main extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">Leaderboard</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Leaderboard {...this.props} />
            </div>
            <div className="col-md-4">
              <AddPerson {...this.props} />
               <EditScore {...this.props} />
               <RemovePerson {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;