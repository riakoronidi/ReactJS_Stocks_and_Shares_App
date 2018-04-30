import React from "react";

const DisplayShare = (props) => {
  if(!props.currentShare) return null;
  return (
    <article>
      <h6>{props.share.symbol}</h6>
      <h6>{props.share.companyName}</h6>
      <p>Sector: {props.share.sector}</p>
      <p>Quantity: {props.share.quantity}</p>
      <p>Buy Price: {props.share.price}</p>
      <p>value: {(props.share.price * props.share.quantity)}</p>
    </article>
  )
}

export default DisplayShare;
