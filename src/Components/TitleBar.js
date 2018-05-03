import React from 'react';

const TitleBar = (props) => {
  return (
    <div className="title">
      <p className="date-now">{(new Date(new Date().getTime())).toDateString()}</p>
      <h2>The Beast of Wall Street</h2>
    </div>
  )
}

export default TitleBar;
