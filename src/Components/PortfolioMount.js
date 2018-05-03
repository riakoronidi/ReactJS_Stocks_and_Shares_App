import React from 'react';
import Portfolio from './Portfolio';
import _ from 'lodash';

const PortfolioMount = (props) => {

  const options = props.portfolio.map((share, index) => {
    return <option key={index} value={index}>{share.companyName}</option>
  });


  const handleChangeSector= (event) => {
    let sector = event.target.value;
    props.onSelectedBySector(sector);
  }

  const handleChange = (event) => {
    let index = event.target.value
    props.handleStockSelected(index);

  }

  return (
    <React.Fragment>
      <div className="child-div">
        <select
          onChange={handleChange}
          id="Stock-selector"
          defaultValue="default">
          <option disabled value="default"> search market</option>
          {options}
        </select>
        <Portfolio portfolio={props.portfolio} wallet={props.wallet} handleWallet={props.updateWallet} portfolioRunner={props.portfolioRunner} stock={props.stock}/>}/>
      </div>
    </React.Fragment>

  )
}

// select a stock to buy, save it by index to a selectedStock array
// pass that through props back to the marketstock and populate
// the form with hidden input fields except company name, volume and
// price. Post the new object to the portfolio collection in the db
//

export default PortfolioMount;
