import React from 'react';

class NewPortfolioStock extends React.Component {
  constructor(props){
    super(props);
    // this.selectedStockForm = this.selectStockForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.viewWallet = this.viewWallet.bind(this);
    this.state = {
      volume: "0"
    }
  }

  handleFormSubmit = (event) => {
     event.preventDefault()
     const buyOrder = this.props.currentStock
     buyOrder.volume = parseInt(this.state.volume)
     delete buyOrder._id;
     alert(`You purchased ${buyOrder.companyName} shares!`)
     fetch('http://localhost:3001/portfolio', {
       method: 'POST',
       headers : {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body:JSON.stringify(buyOrder)
     }).then((res) => res.json())
     .then((data) =>  console.log(data))
     .catch((err)=>console.log(err))

     let newWalletTotal = this.props.wallet - this.totalPrice();
     this.props.onHandleWallet(newWalletTotal);
     this.setState({volume: "0"});
   }

  handleVolumeChange = (event) => {
    this.setState({volume: event.target.value});

  }

  totalPrice = () => {
    let total = this.props.currentStock.price * this.state.volume;
    let result =  +(total.toFixed(2));
    return result;
  }

  viewWallet = () => {
    let newWallet = this.props.wallet - this.totalPrice();
    let result =  +(newWallet.toFixed(2));
    return result;
  }



  render(){
    if(!this.props.currentStock){
      return null;
    }
    return(
    <React.Fragment>
      <form onSubmit={this.handleFormSubmit}>
        <h3>Your selected stock</h3>
        <label>
          Symbol
          <input type="text" disabled value={this.props.currentStock.symbol}/>

          Company Name
          <input type="text" disabled value={this.props.currentStock.companyName}/>

          Sector
          <input type="text" disabled value={this.props.currentStock.sector}/>

          Price Change
          <input type="text" disabled value={this.props.currentStock.priceChange}/>

          Price Change Percent
          <input type="text" disabled value={this.props.currentStock.priceChangePercent}/>

          Price
          <input type="text" disabled value={this.props.currentStock.price}/>

          Week 52 High
          <input type="text" disabled value={this.props.currentStock.week52High}/>
          Enter amount you'd like to purchase
          <br />
          Volume
          <input class="volume-field" type="text" value={this.state.volume} onChange={this.handleVolumeChange}/>
        </label>
        <div class="submit-button">
        <input class="buyButton" type="submit" value="Buy Now" />
        </div>
      </form>
      <h3>Value: £{this.totalPrice()}</h3>
      <h3>Wallet: £{this.viewWallet()}</h3>
    </React.Fragment>
  )
  }
}


export default NewPortfolioStock;
