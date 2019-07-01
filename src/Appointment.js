import React, { Component } from 'react'
import './appointment.css';
import Dialog from './Dialog';

export default class Appointment extends Component {
	constructor(props) {
		super();
		this.state = {
			weekdays: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
		}
	}
	render() {
		console.log(this.props.time.getDay())
		return (
			<div className="availableAppointment">
				<a>{this.state.weekdays[this.props.time.getDay()]+" "+this.props.time.getDate()+"."+this.props.time.getMonth()}</a>
				<div className="appointmentTimes">
					<Dialog className="entry" title="11:00-11:45"/> {/*2 timer i timen*/}
					<Dialog className="entry" title="11:00-11:45"/>
					
					<Dialog className="entry" title="11:45-12:30"/>
					<Dialog className="entry" title="11:45-12:30"/>

					<Dialog className="entry" title="12:30-13:00"/>
					<Dialog className="entry" title="12:30-13:00"/>

					<div className="appointmentPause"/>

					<Dialog className="entry" title="14:00-14:45"/>
					<Dialog className="entry" title="14:00-14:45"/>

					<Dialog className="entry" title="14:45-15:30"/>
					<Dialog className="entry" title="14:45-15:30"/>

					<Dialog className="entry" title="15:30-16:00"/>
					<Dialog className="entry" title="15:30-16:00"/>
				</div>
			</div>
		)
	}
}
