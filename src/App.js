import "./App.css";
import { useEffect, useState } from "react";
import dataArr from "./data.js";
import CoffeeList from "./component/CoffeeList";
import NavSet from "./component/NavSet";
import Detail from "./component/Detail";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

function App() {
  let [coffee, coffeeSet] = useState(dataArr);
  let [stock, stockSet] = useState([10, 11, 12]);
  /*다른방식 라우터 짜기 {<Route path ="/내용" component = {MM}></Route>}*/

  return (
    <Switch>
      <div className="App">
        <Route exact path="/">
          {NavSet}
          <div className="jumbo">
            <h1>10% sale</h1>
            <p>
              더치커피 판매 중입니다. 500ml 부드럽게 차처럼 마실 수 있는
              에티오피아 원두로 만들었습니다. 택배로 발송합니다.더치커피 판매
              중입니다. 500ml 부드럽게 차처럼 마실 수 있는 에티오피아 원두로
              만들었습니다. 택배로 발송합니다.더치커피 판매 중입니다. 500ml
              부드럽게 차처럼 마실 수 있는 에티오피아 원두로 만들었습니다.
              택배로 발송합니다.
            </p>
            <button>Select more</button>
          </div>
          <div className="container">
            <div className="row">
              {coffee.map((element, i) => {
                return <CoffeeList coffee={coffee[i]} />;
              })}
            </div>

            <button
              className="moreBtn"
              onClick={() => {
                axios //json -> obj로 자동변경해줌
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((res) => {
                    coffeeSet([...coffee, ...res.data]); //copy본 생성 대괄호 벗겨서 {}{}{}이런 형태로
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
        <Route exact path="/detail">
          정보 없는 페이지
        </Route>
        <Route exact path="/detail/:id">
          <Detail coffee={coffee} stock={stock} stockSet={stockSet} />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
