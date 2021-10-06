import React, { useState, useContext } from "react";
import { 재고Context } from "../App.js";

let ShoesList = (props) => {
  let 재고 = useContext(재고Context);
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        onClick={() => {
          window.location.href = "/detail/" + props.i;
        }}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      {재고[props.i]}
    </div>
  );
};

export default ShoesList;
