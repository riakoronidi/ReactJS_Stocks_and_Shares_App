import React from 'react';
import TitleBar from '../Components/TitleBar';
// import Portfolio from '../Components/Portfolio';
// import MarketStock from '../Components/MarketStock';


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
  //   this.setState({portfolio});
  // }
  //
  // handleStockMarket(){
  //   this.setState({stock});
  // }

  componentDidMount(){
    fetch("http://localhost:3001/market_stock")
    .then(response => response.json())
    // .then(json => {debugger});
    .then(json => this.setState({stock: json}));
  }

  render(){
    if(!this.state.stock.length){
      return null;
    }
    return(
      <React.Fragment>
        <div className="title-div">
          <TitleBar />
        </div>
        <div className="button-div">
          {/* <button className="buttonPortfolio" onclick={this.handlePortfolio} portfolio={this.state.portfolio}>Portfolio</button>
          <button className="buttonStock" onclick={this.handleStockMarket} portfolio={this.state.stock}>Stock Market</button>           */}
          <button className="buttonPortfolio" >Portfolio</button>
          <button className="buttonStock" >Stock Market</button>
        </div>
        <div className="stock-div">
          <p>RISERS AND FALLERS</p>
          <img  src="http://www.proactiveinvestors.co.uk/thumbs/upload/MarketReport/Image/2015_06/757z468_risers_fallers_resized.png" alt="TextImage"/>
        </div>
        {/* <div>
          <Portfolio portfolio={this.state.stock}/>
        </div> */}
      </React.Fragment>
    )
  }

}

export default MainContainer;
