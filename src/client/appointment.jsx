import React from 'react';


const Appointment = ({key,patient, appt, kind}) => {
  return (
    <div>
      <span>{key}</span>
      <span>{patient}</span>
      <span>{appt}</span>
      <span>{kind}</span>
    </div>
  )
}

export default Appointment;