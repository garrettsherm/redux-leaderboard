import React, { Component } from 'react';

import Leaderboard from '../Leaderboard';

import AddPerson from '../AddPerson';
import EditScore from '../EditScore';
import RemovePerson from '../RemovePerson';

import './main.css';



class Main extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Leaderboard {...this.props} />
            </div>
            <div className="col-md-6">
              <ul className="nav nav-tabs" id="leaderboard-nav">
                <li className="nav-item" ><a className="nav-link active" data-toggle="tab" href="#addperson">Add Person</a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#editscore">Edit Score</a></li>
                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#removeperson">Remove Score</a></li>
              </ul>
              <div className="tab-content">
                <div id="addperson" className="tab-pane active in">
                  <AddPerson {...this.props} />
                </div>
                <div id="editscore" className="tab-pane">
                  <EditScore {...this.props} />
                </div>
                <div id="removeperson" className="tab-pane">
                  <RemovePerson {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;