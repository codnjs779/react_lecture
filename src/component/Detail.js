import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";

//import styled from "styled-components";
// let test = styled.div`
//   padding: 20px;
// `;

// let test2 = styled.h4`
//   font-size: 50px;
// `;

let Detail = (props) => {
  let [stuff, stuffSet] = useState(true);
  let { id } = useParams(); //:id자리에 있던 숫자의미함

  useEffect(() => {
    let timer = setTimeout(() => {
      stuffSet(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let idNum = props.coffee.find((thing) => {
    return thing.id == id;
  });
  let history = useHistory()sd;

  return (
    <div className="container">
      <div className="row">
        <div className="titleName">Detail</div>

        {stuff === true ? (
          <div className="myAlert">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
        ) : null}

        <div className="col-md-6">{idNum?.image}</div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{idNum?.title}</h4>
          <p>{idNum?.content}</p>
          <p>{idNum?.price} won</p>
          <Stock stock={props.stock} />
          <button
            className="btn btn-danger"
            onClick={() => {
              props.stockSet([9, 10, 12]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack(); //push("")괄호내의 주소로 이동하게 해줄 수도 있음
            }}
          >
            {" 뒤로가기"}
          </button>
        </div>
      </div>
    </div>
  );
};

let Stock = (props) => {
  return <p>재고:{props.stock[0]}</p>;
};

export default Detail;
