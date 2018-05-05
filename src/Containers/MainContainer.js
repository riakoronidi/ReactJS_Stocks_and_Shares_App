import React from 'react';
import Home from '../Components/Home';
import Navbar from "../Components/Navbar";
import Portfolio from '../Components/Portfolio';
import MarketStock from '../Components/MarketStock';
import NewPortfolioStock from '../Components/NewPortfolioStock';
import {BrowserRouter as Router, Route} from "react-router-dom";


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePortfolioSelected = this.handlePortfolioSelected.bind(this);
    this.handleStockSelected = this.handleStockSelected.bind(this);
    this.handleSectorSelected = this.handleSectorSelected.bind(this);
    this.handleSelectedSector = this.handleSelectedSector.bind(this);
    this.updateWallet = this.updateWallet.bind(this)
    this.portfolioRunner = this.portfolioRunner.bind(this)
    // this.handleStockMarket = handleStockMarket.bind(this);
    this.state = {
      stock: [],
      portfolio: [],
      sectorStock:[],
      currentShare: null,
      currentStock: null,
      sector: null,
      wallet: "10000000"
    }
  }



  // handlePortfolio(){
  //   // event.preventDefault();
  //   console.log(this.state.portfolio);
  //
  // }
  //
  // handleStockMarket(){
  //   this.setState({stock});
  // }

  componentDidMount(){
    fetch("http://localhost:3001/market_stock")
    .then(response => response.json())
    .then(json => this.setState({stock: json}));

    fetch("http://localhost:3001/portfolio")
    .then(response => response.json())
    .then(json => this.setState({portfolio: json}));
  }

  portfolioRunner(){
    fetch("http://localhost:3001/portfolio")
    .then(response => response.json())
    .then(json => this.setState({portfolio: json}));
  }

  handlePortfolioSelected(index){
    // debugger;
    const selectedShare = this.state.portfolio[index];
    this.setState({currentShare: selectedShare});

  }

  handleSectorSelected(sector){
    this.setState({currentSector: sector});
  }

  handleStockSelected(index){
    const selectedStock = this.state.stock[index];
    this.setState({currentStock: selectedStock});
  }

  handleSelectedSector(index){
   const newArray = [];
   // debugger;
   this.state.stock.map((item) => {
     if(item.sector === index){
       newArray.push(item);
     }
   })
   this.setState({sectorStock: newArray});
  }

  updateWallet(balance){
    this.setState({wallet: balance});
  }

  render(){
    if(!this.state.stock.length){
      return null;
    }

    return(
      <Router>
        <React.Fragment>
          <Navbar />
          <Route path = "/portfolio" render={()=> <Portfolio portfolio={this.state.portfolio} onCurrentShare={this.handlePortfolioSelected} selectedShare={this.state.currentShare} wallet={this.state.wallet} handleWallet={this.updateWallet} portfolioRunner={this.portfolioRunner} stock={this.state.stock}/>}/>
          <Route exact path="/" render={()=><Home stock={this.state.stock}/>}/>
          <Route path = "/market_stock" render={()=> <MarketStock stock={this.state.stock} onStockSelected={this.handleStockSelected} newStock={this.state.currentStock} currentStock={this.state.currentStock} onSectorSelected={this.handleSectorSelected} currentSector={this.state.sector} wallet={this.state.wallet} handleWallet={this.updateWallet}
          sectorStock={this.state.sectorStock}
          onSelectedBySector={this.handleSelectedSector}
                  /> }/>
        </React.Fragment>
      </Router>

    )
  }

}

export default MainContainer;
