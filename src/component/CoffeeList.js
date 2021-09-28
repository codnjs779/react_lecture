import React from "react";

let CoffeeList = (props) => {
  return (
    <div className="col-md-4">
      <div>{props.coffee.image}</div>
      <h4>{props.coffee.title}</h4>
      <p>
        {props.coffee.content} & {props.coffee.price}
      </p>
    </div>
  );
};

export default CoffeeList;
