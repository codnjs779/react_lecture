import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";
import { 재고Context } from "../App.js";
import { CSSTransition } from "react-transition-group";
import TabContent from "./TabContent";

//import styled from "styled-components";
// let test = styled.div`
//   padding: 20px;
// `;

// let test2 = styled.h4`
//   font-size: 50px;
// `;

let Detail = (props) => {
  let 재고 = useContext(재고Context);
  let [tab, tabSet] = useState(0);
  let [stuff, stuffSet] = useState(true);
  let [aniSwitch, aniSwitchSet] = useState(false);
  let { id } = useParams(); //:id자리에 있던 숫자의미함

  useEffect(() => {
    let timer = setTimeout(() => {
      stuffSet(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  let idNum = props.shoes.find((ele) => {
    return ele.id == id;
  });

  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="titleName">Detail</div>

        {stuff === true ? (
          <div className="myAlert">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
        ) : null}

        <div className="col-md-6">
          {" "}
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (idNum.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{idNum.title}</h4>
          <p>{idNum.content}</p>
          <p>{idNum.price} won</p>
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
              history.push("/"); //push("")괄호내의 주소로 이동하게 해줄 수도 있음
            }}
          >
            {" 뒤로가기"}
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClink={() => {
              aniSwitchSet(false);
              tabSet(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              aniSwitchSet(false);
              tabSet(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
      <CSSTransition in={aniSwitch} classNames="aniTab" timeout={500}>
        <TabContent tab={tab} aniSwitchSet={aniSwitchSet} />
      </CSSTransition>
    </div>
  );
};

let Stock = (props) => {
  return <p>재고:{props.stock[0]}</p>;
};

export default Detail;
