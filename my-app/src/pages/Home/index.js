import { useState, useEffect , useRef} from "react";

import { API_GET_DATA } from '../../global/constants'

import Edit from "./compoents/Edit";
import MyList from "./compoents/List";
import "./index.css";

const token = 'QWxhZGRpbjpvcGVuIHNlbrthju790dhdzdghtrd'


//取得資料
async function fetchDta(setData){
 const res = await  fetch(API_GET_DATA , {
  method : "GET",
  headers :{ 
  'Authentication' : `Bearer ${token}`,
   'Content-type' : 'application/json'
  }})
  const resData = await res.json()
  console.log(resData)
  setData(resData)
}

//增加資料
async function fetchSetData(data){
  const resData = JSON.stringify(data)
  await  fetch(API_GET_DATA , {
    method : "PUT",
    headers :{ 'Content-type' : 'application/json'},
    body : resData
  })
 }
 

const Home = () => {
  const [data, setData] = useState([]);
  const subittingStatus = useRef(false);//如果沒有案F5 subittingData 永遠是false 的意思

  useEffect(()=>{
    if(!subittingStatus.current)
    {
      return;
    }
   fetchSetData(data)
   .then(data => subittingStatus.current = false)//data更新完後變成false, data變更(新增/刪除)時會先設成true
  },[data])

  //data更動後就會觸發方法 渲染畫面時也會執行一次
useEffect(()=>{
//data更動時要做的回應
window.alert("新增成功!");
//綁定時
fetchDta(setData)
// return () =>{//取消綁定/清除時

// }
},[])


  return (
    <div className="app">
      <Edit addData={setData} subittingStatus = {subittingStatus}/>
      <MyList listData={data} deleteData={setData} subittingStatus={subittingStatus}/>
    </div>
  );
};

export default Home;
//npm start 