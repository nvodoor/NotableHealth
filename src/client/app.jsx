import React from 'react';
import ReactDOM from 'react-dom';
import Physicians from './physicians.jsx';
import Appointment from './appointment.jsx';

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
      getAppt = <div>
        <div>
          <h1>{physician}</h1>
          <p>{email}</p>
        </div>
        {appointments.map((appt, i) => {
          return <Appointment
                  key={i}
                  patient={appt.patient} 
                  appt={appt.appt} 
                  kind={appt.kind} />
        })}
      </div>
    }
    return (
      <div>
        <h1>Notable</h1>
        <div class='container'>
          <Physicians physicians={physicians} getappt={this.handleAppointments}/>
          {getAppt}
        </div>
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));