import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Appointment from './Appointment.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      occupiedDates: [new Date('June 24, 2019')]
    };
  }
  onChange = date => {
    this.setState({ date})
  }

  getAppointments() {
    let firstDate = new Date(this.state.date[0]);
    let lastDate = new Date(this.state.date[1]);
    let dates = [firstDate]
    while(firstDate<lastDate) {
      if(!this.state.occupiedDates.includes(firstDate)) {
        dates.push(firstDate+1);
      }
      firstDate.setDate(firstDate.getDate()+1);
      firstDate.getDay();
    }
    return dates.slice(1);
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="header">
          <img className="ukelogo" alt="magiskeØyeblikk" src="https://www.uka.no/static/img/ukelogo_hvit_dato.svg"/>
          <a className="noselect">UKE-massasjen</a>
          <img className="oyeblikk" alt="magiskeØyeblikk" src="https://www.uka.no/static/img/magiske_oyeblikk.svg"/>
        </div>
        <div className="contentContainer">
          <div className="calendarContainer">
            <Calendar
              className="calendar"
              onChange={this.onChange}
              value={this.state.date}
              selectRange
              showNeighboringMonth={false}
              minDate={new Date()}
              tileDisabled = {({date}) => date.getDate() === 10}
              tileClassName={({date}) => {
                return date.getDate() === 10 ? 'occupied' : null;
              }}
            />
          </div>
          <div className="availableContainer">
            {this.state.date.length>1?
            Object.entries(this.getAppointments()).map(point =>
              <Appointment
                key={point} 
                time={new Date(point[1])}
              />
            ):
            <Appointment
              time={this.state.date}
            />}
          </div>
        </div>
      </div>
    );
  }
}