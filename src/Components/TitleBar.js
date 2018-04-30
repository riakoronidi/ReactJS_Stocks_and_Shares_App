import React from 'react';

const TitleBar = (props) => {
  return (
    <div className="title">
      <p className="date-now">{(new Date(new Date().getTime())).toDateString()}</p>
      <h2>The Stock Market today</h2>
    </div>
  )
}

export default TitleBar;
