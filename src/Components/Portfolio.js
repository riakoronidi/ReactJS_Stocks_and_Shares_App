import React from 'react';
import DisplayShare from './DisplayShare';
// import _ from 'lodash';

const Portfolio = (props) => {
  const options = props.portfolio.map((share, index) => {
    return <option key={index} value={index}>{share.symbol}</option>
  });

  const handlePortfolioSelect = (event) => {
    let index = event.target.value;
    props.onPortfolioItemSelected(index);
  }

  const sellShare = (index) => {
    props.portfolio.splice(index);
  }


  return (
    <React.Fragment>
      <span className="portfolio-body">
        <select
          onChange={handlePortfolioSelect}
          id="portfolio-selector"
          >
            {options}
          </select>
          <DisplayShare/>
          <button onSubmit={sellShare}>Sell</button>
        </span>
      </React.Fragment>
    )
  }

  export default Portfolio;
