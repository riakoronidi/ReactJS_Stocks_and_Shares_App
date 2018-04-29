import React from 'react';

const MarketStockSelector = (props) => {
  const options = props.stock.map((stockItem, index){
    return <option key={index} value={index}>{stock.symbol}</option>
  });

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
  )
}

export default MarketStock;
