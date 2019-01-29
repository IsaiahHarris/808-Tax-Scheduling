import React from 'react';
import './TimeList.scss';
const TimeList = () => {
  let times = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM'
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
