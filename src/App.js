import "./App.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import dataArr from "./data.js";
import ShoesList from "./component/ShoesList";
import NavSet from "./component/NavSet";
import Detail from "./component/Detail";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Cart from "./component/Cart.js";
import ShoesInfo from "./component/ShoesInfo";

export let 재고Context = React.createContext();

function App() {
  let [shoes, shoesSet] = useState(dataArr);
  let [stock, stockSet] = useState([10, 11, 12]);
  /*다른방식 라우터 짜기 {<Route path ="/내용" component = {MM}></Route>}*/
  let history = useHistory();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {NavSet}
          <ShoesInfo />
          <div className="container">
            <재고Context.Provider value={stock}>
              <div className="row">
                {shoes.map((element, i) => {
                  return <ShoesList shoes={shoes[i]} i={i} key={i} />;
                })}
              </div>
            </재고Context.Provider>

            <button
              className="moreBtn"
              onClick={() => {
                axios //json -> obj로 자동변경해줌
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((res) => {
                    shoesSet([...shoes, ...res.data]); //copy본 생성 대괄호 벗겨서 {}{}{}이런 형태로
                  }, [])
                  .catch(() => {
                    console.log("실패!");
                  }); //요청실패시 코드
              }}
            >
              more
            </button>
          </div>
        </Route>

        <Route exact path="/detail/:id">
          <재고Context.Provider value={stock}>
            <Detail shoes={shoes} stock={stock} stockSet={stockSet} />
          </재고Context.Provider>
        </Route>

        <Route exact path="/:id"></Route>

        <Route path="/cart">
          <Cart>카트페이지 입니다</Cart>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
