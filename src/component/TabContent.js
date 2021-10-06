import React, { useEffect } from "react";

let TabContent = (props) => {
  useEffect(() => {
    props.aniSwitchSet(true);
  });
  if (props.tab === 0) {
    return <div>0번째 내용</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용</div>;
  }
  <div>2번째 내용</div>;
};

export default TabContent;
