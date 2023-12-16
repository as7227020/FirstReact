import React from "react";
import { useParams , useOutletContext, useSearchParams} from "react-router-dom";

//useOutletContext -> 外層使用Outlet傳進來的值要接的話需要用
//useParams -> 單純用Props方法帶值用
//useSearchParams -> http://localhost:3000/?test=123 取得後面的GET 的test=123 
const Product = () =>{

    //Hook
    const {sendId} = useParams();
    const OutletData = useOutletContext();
    const [searchParam] = useSearchParams();

console.log(searchParam.getAll("參數名的KEY"));
//searchParam.get("參數名的KEY") 只會抓第一個 Ex.http://localhost:3000/pr/2?參數名的KEY=999
//searchParam.getAll("參數名的KEY") 會抓全部有參數名的KEY 的值 Ex.http://localhost:3000/pr/2?參數名的KEY=999&參數名的KEY=123
    return(
        <h1>產品頁面 Product {sendId} - {OutletData.toSendMsg}</h1>
    );

}
export default Product;