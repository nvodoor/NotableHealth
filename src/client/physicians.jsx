import React from 'react';
import './physicians.css';
import PropTypes from 'prop-types';

const Physicians = ({physicians, getappt, physician}) => {
  return (
    <div>
      <ul className="ul-1">
        {physicians.map((phys, i) => {
          if (physician === phys) {
            return <li key={i} className="li-1 highlight" onClick={getappt}>{phys}</li>
          }
          return <li key={i} className="li-1" onClick={getappt}>{phys}</li>
        })}
      </ul>
    </div>
  )
}

export default Physicians;

Physicians.PropTypes = {
  physicians: PropTypes.array,
  getappt: PropTypes.func,
  physician: PropTypes.string
}