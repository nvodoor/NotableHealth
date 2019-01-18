import React from 'react';
import ReactDOM from 'react-dom';
import Physicians from './physicians.jsx';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      physicians: [],
      appointments: [],
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
      console.log(data);
    })
  }

  render() {
    const { physicians, appointments } = this.state;
    return (
      <div>
        <h1>Notable</h1>
        <div class='container'>
          <Physicians physicians={physicians} getappt={this.handleAppointments}/>
        </div>
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('app'));