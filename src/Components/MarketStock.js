import React from 'react';
import _ from 'lodash';

const MarketStockSelector = (props) => {

  const options = props.stock.map((stockItem, index){
    return <option key={index} value={index}>{stockItem.symbol}</option>
  });

  const sectors = props.stock.map((stockItem, index){
    return <option key={index} value={index}>{stockItem.sector}</option>
  })



  const handleChange = (event) => {
    let index = event.target.value
    props.handleStockSelected(index);
  }

  return (
    <select
      onChange={handleChange}
       id="Stock-selector"
       defaultValue="default">
         <option disabled value="default"> search market</option>
         {options}
       </select>
       <select
          id="sector-filter"
          <option disabled value="default"> by sector</option>

       </select>
  )
}

export default MarketStock;
