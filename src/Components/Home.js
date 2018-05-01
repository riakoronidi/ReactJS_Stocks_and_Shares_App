import React from 'react';
import TitleBar from './TitleBar';
import Portfolio from './Portfolio';
import MarketStock from './MarketStock';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


const Home = (props) => {

  return(
    <Router>
      <React.Fragment>

        <div className="title-div">
          <TitleBar />
        </div>

        <div className="button-div">
          <Route path = "/portfolio" render={()=> <Portfolio portfolio={props.data}/>}/>
          <Route path = "/market_stock" render={()=> <MarketStock stock={props.stock_data}/>}/>

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


export default Home;
