import React from 'react';
import _ from 'lodash';

const MarketStock = (props) => {

  const options = props.stock.map((stockItem, index) => {
    return <option key={index} value={index}>{stockItem.symbol}</option>
  });

  const sectors = _.uniqBy(props.stock,'sector');

  const sectorOps = sectors.map((stockItem, index) => {
    return <option key={index} value={index}>{stockItem.sector}</option>
  });

  const selectedStockItem = sectors.map((chosenStockItem, index) => {
    return <option key={index} value={index}>{chosenStockItem.sector}</option>
  });


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
        {sectorOps}
      </select>

      <form id="form1" action="http://localhost:3001/portfolio" method="post">
      <label type="text" >{selectedStockItem.symbol}</label>
      <label type="text" >{selectedStockItem.companyName}</label>
      <label type="text" >{selectedStockItem.sector}</label>
      <label type="text" >{selectedStockItem.priceChange}</label>
      <label type="text" >{selectedStockItem.priceChangePercent}</label>
      <label type="text" >{selectedStockItem.price}</label>
      <label type="text" >{selectedStockItem.week52High}</label>
      <input type="text" >{selectedStockItem.volume}</input>
      <input type="button" value="Submit">Buy now</input>
    </form>

  </React.Fragment>

)
}

// select a stock to buy, save it by index to a selectedStock array
// pass that through props back to the marketstock and populate
// the form with hidden input fields except company name, volume and
// price. Post the new object to the portfolio collection in the db
//

export default MarketStock;
