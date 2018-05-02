import React from 'react';
import NewPortfolioStock from './NewPortfolioStock';
import _ from 'lodash';

const MarketStock = (props) => {

  const options = props.stock.map((stockItem, index) => {

    return <option key={index} value={index}>{stockItem.symbol}</option>


  });

  // const sectors = _.uniqBy(props.stock,'sector');


  const sectors = props.stock.map((stockItem, index) => {
    return <option key={index} value={index}>{stockItem.sector}</option>
  });

  const filterBySector = () => {
    const newSectors = [];
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
     <div className="marketstock-div">
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
      <NewPortfolioStock wallet={props.wallet} currentStock={props.currentStock} onHandleWallet={props.handleWallet}/>
      <h3>News</h3>
      <p>Paracutes for sale!</p>
      <p>Buy low sell high!</p>
      <p>Investing in stock markets is a gamble: while you could win small or win big,</p>
      <p>you could lose small or lose big – and end up empty-handed.</p>
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
