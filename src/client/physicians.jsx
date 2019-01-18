import React from 'react';

const Physicians = ({physicians, getappt}) => {
  return (
    <div>
      <ul>
        {physicians.map((phys, i) => {
          return <li key={i} onClick={getappt}>{phys}</li>
        })}
      </ul>
    </div>
  )
}

export default Physicians;