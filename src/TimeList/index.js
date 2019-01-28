import React from 'react';
import './TimeList.scss';
const TimeList = () => {
  let times = [
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00'
  ];
  return (
    <div className="time-list-container">
      {times.map((time, i) => {
        return (
          <div key={i} className="time">
            {time}
          </div>
        );
      })}
    </div>
  );
};

export default TimeList;
