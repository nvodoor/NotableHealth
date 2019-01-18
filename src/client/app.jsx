import React from 'react';
import ReactDOM from 'react-dom';
import Physicians from './physicians.jsx';
import Appointment from './appointment.jsx';
import './app.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      physicians: [],
      appointments: [],
      physician: '',
      email: '',
    }

    this.handleAppointments = this.handleAppointments.bind(this);
  }

  componentDidMount() {
    fetch('/physicians')
    .then(res => res.json())
    .then((data) =>  {
      let arr = [];
      for (let i = 0; i < data.length; i++) {
        const phys = data[i].physician;
        arr.push(phys);
      }
      this.setState({
        physicians: arr
      })
    })
  }

  handleAppointments(e) {
    const name = e.target.innerText;
    fetch(`physicians/${name}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        appointments: data,
        physician: data[0].physician,
        email: data[0].email
      })
    })
  }

  render() {
    const { physicians, appointments, physician, email } = this.state;

    let getAppt;

    if (appointments.length === 0) {
      getAppt = <p>There are no appointments here.</p>
    } else {
      getAppt = 
      <div>
        <div>
          <h1>{physician}</h1>
          <p>{email}</p>
        </div>
        <div className="highlight-header">
          <span className="header">#</span>
          <span className="header">Name</span>
          <span className="header">Time</span>
          <span className="header">Kind</span>
        </div>
        {appointments.map((appt, i) => {
          return <Appointment
                  key={i}
                  id={i+1}
                  patient={appt.patient} 
                  appt={appt.appt} 
                  kind={appt.kind} />
        })}
      </div>
    }
    return (
      <div>
        <div className="container">
          <div className="col-1">
            <h1>Notable</h1>
            <h2>Physicians</h2>
            <Physicians physicians={physicians} physician={physician} getappt={this.handleAppointments} />
          </div>
          <div className="col-2">
            {getAppt}
          </div>
        </div>
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));

