import React from 'react';
import TitleBar from '../Components/TitleBar';
import Portfolio from '../Components/Portfolio';
import MarketStock from '../Components/MarketStock';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


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
          <div className="title-div">
            <TitleBar />
          </div>
          <div className="button-div">
            <Route path = "/portfolio" render={()=> <Portfolio portfolio={this.state.portfolio}/>}/>
            <Route path = "/market_stock" render={()=> <Portfolio portfolio={this.state.stock}/>}/>

            <Link to='/portfolio'><button className="buttonPortfolio" >Portfolio</button></Link>
            <Link to='/market_stock'><button className="buttonStock" >Stock Market</button></Link>

          </div>
          <div className="stock-div">
            <p>RISERS AND FALLERS</p>
            <img  src="http://www.proactiveinvestors.co.uk/thumbs/upload/MarketReport/Image/2015_06/757z468_risers_fallers_resized.png" alt="TextImage"/>
          </div>

        </React.Fragment>
      </Router>
    )
  }

}

export default MainContainer;
