import React from 'react';
import TitleBar from './TitleBar';
import {Link} from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import overlayFactory from 'react-bootstrap-table2-overlay';


const Home = (props) => {
  const data = props.stock
  // const data = [
  //   {
  //     "_id": "5ae98a79565760910cb6fd22",
  //     "symbol": "CTR",
  //     "companyName": "CHARLES TAYLOR",
  //     "sector": "Support services",
  //     "priceChange": "-19.00",
  //     "priceChangePercent": "-6.79",
  //     "price": 261,
  //     "week52High": 273.58,
  //     "volume": 4420
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd23",
  //     "symbol": "CPR",
  //     "companyName": "CARPETRIGHT",
  //     "sector": "Retailers",
  //     "priceChange": "+4.00",
  //     "priceChangePercent": "+10.26",
  //     "price": 43,
  //     "week52High": 45.5,
  //     "volume": 1133
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd24",
  //     "symbol": "RUS",
  //     "companyName": "RAVEN RUSSIA",
  //     "sector": "Investments",
  //     "priceChange": "+1.90",
  //     "priceChangePercent": "+4.41",
  //     "price": 43.1,
  //     "week52High": 43.5,
  //     "volume": 18806
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd25",
  //     "symbol": "TET",
  //     "companyName": "TREATT",
  //     "sector": "Chemicals",
  //     "priceChange": "+22.00",
  //     "priceChangePercent": "+5.18",
  //     "price": 447,
  //     "week52High": 425,
  //     "volume": 361521
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd26",
  //     "symbol": "CWD",
  //     "companyName": "COUNTRYWIDE",
  //     "sector": "Investments",
  //     "priceChange": "+4.40",
  //     "priceChangePercent": "+4.23",
  //     "price": 108.4,
  //     "week52High": 104,
  //     "volume": 69224
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd27",
  //     "symbol": "IRV",
  //     "companyName": "INTERSERVE",
  //     "sector": "Support services",
  //     "priceChange": "-3.70",
  //     "priceChangePercent": "-3.32",
  //     "price": 107.6,
  //     "week52High": 111.3,
  //     "volume": 533986
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd28",
  //     "symbol": "MGP",
  //     "companyName": "MEDICA GROUP",
  //     "sector": "Pharmaceuticals",
  //     "priceChange": "-3.00",
  //     "priceChangePercent": "-2.44",
  //     "price": 120,
  //     "week52High": 123,
  //     "volume": 554136
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd29",
  //     "symbol": "MERL",
  //     "companyName": "MERLIN",
  //     "sector": "Travel & Leisure",
  //     "priceChange": "+15.40",
  //     "priceChangePercent": "+4.44",
  //     "price": 362.1,
  //     "week52High": 363,
  //     "volume": 4836228
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd2a",
  //     "symbol": "MRW",
  //     "companyName": "MORRISON",
  //     "sector": "Retailers",
  //     "priceChange": "+5.00",
  //     "priceChangePercent": "+2.13",
  //     "price": 240,
  //     "week52High": 234.5,
  //     "volume": 15285097
  //   },
  //   {
  //     "_id": "5ae98a79565760910cb6fd2b",
  //     "symbol": "HIK",
  //     "companyName": "HIKMA",
  //     "sector": "Pharmaceuticals",
  //     "priceChange": "+63.50",
  //     "priceChangePercent": "+5.04",
  //     "price": 1324.5,
  //     "week52High": 1252,
  //     "volume": 1003303
  //   },{
  //     "_id": "5aea1e5d6cf9c6bb953b76fc",
  //     "symbol": "ASD",
  //     "companyName": "Asda",
  //     "sector": "Retailers",
  //     "priceChange": "+19.00",
  //     "priceChangePercent": "+6.79",
  //     "price": 198,
  //     "week52High": 201.58,
  //     "volume": 5420
  //   },
  //   {
  //     "_id": "5aea1e5d6cf9c6bb953b76fd",
  //     "symbol": "BTS",
  //     "companyName": "BOOTS",
  //     "sector": "Retailers",
  //     "priceChange": "-2.69",
  //     "priceChangePercent": "-3.57",
  //     "price": 37,
  //     "week52Average": 45.5,
  //     "volume": 3625
  //   }
  // ]

  const columns = [{
    dataField: 'priceChangePercent',
    text: '%+/-'
  },{
    dataField: 'priceChange',
    text: '+/-'
  },{
    dataField: 'price',
    text: 'Share Price'
  },{
    dataField: 'companyName',
    text: 'Company Name'
  },{
    dataField: 'symbol',
    text: 'Company symbol'
  }
];

return(
  <React.Fragment>

    <TitleBar />

    {/* <div className="button-portfolio">
      <Link to='/portfolio'>Portfolio</Link>
    </div>
    <div className="button-stock">
      <Link to='/market_stock'>Market Stock</Link>
    </div> */}

    <div className="stock-div">
      <h3 id="titleRaF">RISERS AND FALLERS</h3>

      <BootstrapTable keyField='symbol' data={data} columns={columns} rowStyle={ { backgroundColor: 'dimgray' ,color:'white', 'textShadow': '2px 2px black'} } loading={ true } striped />
    </div>

  </React.Fragment>
)
}


export default Home;
