import React from 'react';
import './appointment.css';

const Appointment = ({key,id,patient, appt, kind}) => {
  return (
    <div key={key}>
      <span className="param">{id}</span>
      <span className="param">{patient}</span>
      <span className="param">{appt}</span>
      <span className="param">{kind}</span>
    </div>
  )
}

export default Appointment;