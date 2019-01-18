import React from 'react';


const Appointment = ({key,id,patient, appt, kind}) => {
  return (
    <div key={key}>
      <span>{id}</span>
      <span>{patient}</span>
      <span>{appt}</span>
      <span>{kind}</span>
    </div>
  )
}

export default Appointment;