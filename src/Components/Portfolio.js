import React from 'react';
import _ from 'lodash';

const Portfolio = (props) => {

  const options = props.portfolio.map((share, index){
    return <option key={index} value={index}>{share.name}</option>
  });

  const handlePortfolioSelect = (event) => {
    let index = event.target.value;
    props.onPortfolioItemSelected(index);
  }

  return (
    <React.Fragment>
     <select
    onChange={handlePortfolioSelect}
    id="portfolio-selector"
    >
      {options}
    </select>
    
    </React.Fragment>
  )
}

export default Portfolio;
