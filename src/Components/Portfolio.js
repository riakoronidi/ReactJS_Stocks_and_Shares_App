import React from 'react';
import DisplayShare from './DisplayShare';
import _ from 'lodash';

const Portfolio = (props) => {

  const options = props.portfolio.map((share, index) => {
    return <option key={index} value={index}>{share.companyName}</option>
  });

  //
  // const stockSharePrice = props.

  const handlePortfolioSelect = (event) => {
    // debugger;
    let index = event.target.value;
    props.onCurrentShare(index);
  }

  const filterStockMarketByPortfolioStockName = () => {
    if(props.selectedShare !== null){
      let filteredStock = _.filter(props.stock, {"companyName": props.selectedShare.companyName})
      return filteredStock[0].price
    };
  };

  const filterStockMarketPriceChangePercent = () => {
    if(props.selectedShare !== null){
      let filteredStock = _.filter(props.stock, {"companyName": props.selectedShare.companyName})
      return filteredStock[0].priceChangePercent
    };
  };

  const calculateDifferenceBetweenStockMarketAndPortfolioStock = () => {
    if(props.selectedShare !== null){
      let filteredStock = _.filter(props.stock, {"companyName": props.selectedShare.companyName})
      let totalStockMarketShareValue = filteredStock[0].price * props.selectedShare.volume
      let totalPortfolioShareValue = props.selectedShare.price * props.selectedShare.volume
      let profitOrLoss = totalStockMarketShareValue - totalPortfolioShareValue
      return profitOrLoss
    }
  };

  const comparePrices = () => {
    if(props.selectedShare !== null && props.selectedStock !== null){

      console.log(props.selectedShare.price);
      console.log(props.selectedStock.price);

      // update a stock market object with a new price etc
      // compare our stock market object against portfolio object
      // filter stock array by chosen portfolio objects companyName
      //
      // if you sell you add the combined sell price to the total

      //
    }
    //       debugger;
    // if(!props === undefined){
    //   let portfolioShare = props.currentShare.price
    //   console.log(portfolioShare);
    //   let stockShare = props.currentStock.price
    //   console.log(stockShare);
  }

  // const sellShares = (share) => {
  //   for(share of portfolio){
  //     if(share.)
  //   }
  //
  // }

  //sell button when clicked, will remove the selected share from the portfolio array.

  //once removed, loop through the array and count the price*quantity of each remaining share

  //add total to a variable that can then store the totalValue of shares held

  //

  // the profit/loss should then be updated in the database

  const totalValue = () => {
    let total = 0;
    if(props.portfolio !== []){
      for(let share of props.portfolio){
        total+=share.price * share.volume;
      }return total
    }else{return total=0};
  }

  const shareValue = () => {
    if(props.selectedShare !== null){
      return props.selectedShare.price * props.selectedShare.volume;
    }
  }

  // let total = 0;
  // for(let share of props.portfolio){
  //   total+=share.price * share.volume;
  // }
  // return total;

  const updateBalanceBySellPrice = () =>{
    let newBalance = parseInt(props.wallet) + shareValue()
    props.handleWallet(newBalance)
  }

  const updateBalanceByAllPrices = () =>{
    // props.handleWallet(newBalance)

    // let newBalance = 0;
    // props.portfolio.map((share) => {
    // newBalance += (share.price * share.volume)
    // });
    let finalBalance = parseInt(props.wallet) + totalValue()
    props.handleWallet(finalBalance)
    // return finalBalance

  }

  const handleButton = (event)=>{
    event.preventDefault()
    const item = props.selectedShare;
    alert(`You sold ${item.companyName} shares!`)
    fetch('http://localhost:3001/portfolio' + '/' + item._id, {
      method: 'DELETE'
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=> console.log(err))
    updateBalanceBySellPrice()
    props.portfolioRunner()
  }

  const handleClick = (event)=>{
    alert("ARE YOU OUT OF YOUR MIND?!")
    event.preventDefault()
    console.log("ALL DELETED");
    fetch('http://localhost:3001/portfolio', {
      method: 'DELETE'
    }).then((res) => res.json())
    .then((data) =>  console.log(data))
    .catch((err)=> console.log(err))
    updateBalanceByAllPrices()
  }


  return (
    <React.Fragment>
      <div className="child-div">
        <h3>My Portfolio Shares</h3>
        <select
          onChange={handlePortfolioSelect}
          id="portfolio-selector"
          defaultValue="default"
          >
            <option disabled value='default'> view shares</option>
            {options}
          </select>
          <DisplayShare
            share={props.selectedShare}
          />
          <button className="buyButton" onClick={handleButton}>SELL SHARE</button>
          <button className="panic" onClick={handleClick}>PANIC SELL ALL</button>
          {/* <input type="button" value="Delete ALL" onClick={this.handleClick}/> */}
          <h3>Portfolio Information</h3>
          <h4>Total Portfolio Value: £{totalValue()}</h4>
          <h4>Current Balance Value: £{props.wallet}</h4>
          <h4>Selected Share Value: £{shareValue()}</h4>
          <br />
          <h3>Market Comparison</h3>
          <h4>Current Profit/Loss of Share: £{calculateDifferenceBetweenStockMarketAndPortfolioStock()}</h4>
          <h4>Share Percent Change: {filterStockMarketPriceChangePercent()}%</h4>
          <h4>StockMarket Value of Share: £{filterStockMarketByPortfolioStockName()}</h4>
        </div>
      </React.Fragment>
    )
  }

  export default Portfolio;
