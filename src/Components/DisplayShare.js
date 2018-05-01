import React from "react";

const DisplayShare = (props) => {
  if(!props.share) return null;
  return (
    <ul>
      <li>{props.share.companyName}({props.share.symbol})</li>
      <li>Sector: {props.share.sector}</li>
      <li>Quantity: {props.share.volume}</li>
      <li>Buy Price: £{props.share.price}</li>
      <li>value: £{(props.share.price * props.share.volume)}</li>

    </ul>
  )
}

export default DisplayShare;
