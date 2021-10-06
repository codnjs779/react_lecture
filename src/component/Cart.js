import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { connect, useSelector } from "react-redux";

let Cart = (props) => {
  console.log(props);
  let [alertOn, alertSet] = useState(true);
  console.log(props.state);
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              <td>
                <button
                  onClick={() => {
                    props.dispatch({ type: "Add" });
                  }}
                >
                  ➕
                </button>

                <button
                  onClick={() => {
                    props.dispatch({ type: "Minus" });
                  }}
                >
                  ➖
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
      {alertOn === true ? (
        <div className="myAlert">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              alertSet(false);
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

function stateToProps(state) {
  return {
    state: state.reducer,
  };
}
export default connect(stateToProps)(Cart);
