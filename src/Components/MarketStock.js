import React from 'react';
import NewPortfolioStock from './NewPortfolioStock';
import _ from 'lodash';

const MarketStock = (props) => {

  const options = props.stock.map((stockItem, index) => {

    return <option key={index} value={index}>{stockItem.companyName}</option>


  });

  // const sectors = _.uniqBy(props.stock,'sector');


  const sectors = props.stock.map((stockItem, index) => {
    return <option key={index} value={stockItem.sector}>{stockItem.sector}</option>
  });

  const selectedSectors = props.sectorStock.map((item, index) => {
    return <ol key={index}>{item.companyName}</ol>;
  })




  const handleChangeSector= (event) => {
    let sector = event.target.value;
    props.onSelectedBySector(sector);

  }



  const handleChange = (event) => {
    let index = event.target.value
    props.onStockSelected(index);

  }



  return (
    <React.Fragment>
      <div className="child-div">
        <h3>Global Stock Market</h3>
        <select
          onChange={handleChange}
          id="Stock-selector"
          defaultValue="default">
          <option disabled value="default">SELECT A STOCK</option>
          {options}
        </select>
        {/* <select
          onChange={handleChangeSector}
          id="sector-filter"
          defaultValue="default">
          <option disabled value="default"> by sector</option>
          {sectors}
        </select>
        {selectedSectors} */}
        <NewPortfolioStock wallet={props.wallet} currentStock={props.currentStock} onHandleWallet={props.handleWallet}/>
          <h3 className="breakingNews"><i>Breaking News</i></h3>
          <h5><a href="https://www.theguardian.com/business/2018/apr/27/tsb-it-meltdown-banking">TSB has been referred to as a Totally Shambolic Bank by angry consumer Jonathan Cruickshank.</a></h5>
      </div>
    </React.Fragment>

  )
}

// select a stock to buy, save it by index to a selectedStock array
// pass that through props back to the marketstock and populate
// the form with hidden input fields except company name, volume and
// price. Post the new object to the portfolio collection in the db
//

export default MarketStock;
