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
       </React.Fragment>

  )
}

export default MarketStock;
