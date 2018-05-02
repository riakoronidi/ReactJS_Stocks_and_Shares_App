import React from 'react';
import NewPortfolioStock from './NewPortfolioStock';
import _ from 'lodash';

const MarketStock = (props) => {
  debugger;

  const options = props.stock.map((stockItem, index) => {

    return <option key={index} value={index}>{stockItem.symbol}</option>
    debugger;


  });

  // const sectors = _.uniqBy(props.stock,'sector');


   const sectors = props.stock.map((stockItem, index) => {
    return <option key={index} value={index}>{stockItem.sector}</option>
  });

  const filterBySector = () => {
    const newSectors = [];
    debugger;
    for (let item of sectors){
      if(item.sector){
        newSectors.push(item)
      }

    }
  }






  const handleChange = (event) => {
    let index = event.target.value
    props.onStockSelected(index);

  }



  return (
    <React.Fragment>
      <select
        onChange={handleChange}
        id="Stock-selector"
        defaultValue="default">
        <option disabled value="default"> search market</option>
        {options}
      </select>
      <select
        id="sector-filter"
        defaultValue="default">
        <option disabled value="default"> by sector</option>
        {sectors}
      </select>
      <button className="button" onClick={this.filterBySector}>Filter By Sector</button>
      <NewPortfolioStock wallet={props.wallet} currentStock={props.currentStock}/>
    </React.Fragment>

  )
}

// select a stock to buy, save it by index to a selectedStock array
// pass that through props back to the marketstock and populate
// the form with hidden input fields except company name, volume and
// price. Post the new object to the portfolio collection in the db
//

export default MarketStock;
