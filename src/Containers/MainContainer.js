import React from 'react';
import Home from '../Components/Home';
import Portfolio from '../Components/Portfolio';
import MarketStock from '../Components/MarketStock';
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {Route,  NavLink,  HashRouter} from "react-router-dom";


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.handlePortfolio = handlePortfolio.bind(this);
    // this.handleStockMarket = handleStockMarket.bind(this);
    this.state = {
      stock: [],
      portfolio: []
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
  }

  render(){
    if(!this.state.stock.length){
      return null;
    }

    return(
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path = "/portfolio" render={()=> <Portfolio portfolio={this.state.portfolio}/>}/>
          <Route path = "/market_stock" render={()=> <MarketStock stock={this.state.stock}/>}/>
        </React.Fragment>
      </Router>

    )
  }

}

export default MainContainer;
