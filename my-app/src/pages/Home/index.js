import { useState, useEffect } from "react";

import Edit from "./compoents/Edit";
import MyList from "./compoents/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  //data更動後就會觸發方法
useEffect(()=>{
//data更動時要做的回應
},[data])

  return (
    <div className="app">
      <Edit addData={setData} />
      <MyList listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
//npm start 