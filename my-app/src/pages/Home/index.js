import { useState, useEffect } from "react";

import { API_GET_DATA } from '../../global/constants'

import Edit from "./compoents/Edit";
import MyList from "./compoents/List";
import "./index.css";

async function fetchDta(setData){
//  const res = await  fetch(API_GET_DATA , {
// method : "GET",
// headers :{'Content-type' : 'application/json'}
//  })
const res = await fetch(API_GET_DATA)
 const {data} = await res.json()
console.log(data)
setData(data)
}


const Home = () => {
  const [data, setData] = useState([]);


  //data更動後就會觸發方法 渲染畫面時也會執行一次
useEffect(()=>{
//data更動時要做的回應
//window.alert("新增成功!");
//綁定時
fetchDta(setData)
// return () =>{//取消綁定/清除時

// }
},[])


  return (
    <div className="app">
      <Edit addData={setData} />
      <MyList listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
//npm start 