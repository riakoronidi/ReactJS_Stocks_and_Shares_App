import React from 'react';
import TitleBar from '../Components/TitleBar';

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

  render(){
    return(
      <React.Fragment>
        <div className="title-div">
        <TitleBar />
        </div>
        <div className="button-div">
          <button className="buttonPortfolio" >Portfolio</button>
          <button className="buttonStock" >Stock Market</button>
        </div>
        <div className="stock-div">
          <p>RISERS AND FALLERS</p>
          <img  src="http://www.proactiveinvestors.co.uk/thumbs/upload/MarketReport/Image/2015_06/757z468_risers_fallers_resized.png" alt="TextImage"/>
        </div>

      </React.Fragment>
    )
  }

}

export default MainContainer;
