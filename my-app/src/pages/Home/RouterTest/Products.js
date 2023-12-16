import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

const Products = () =>{

    const LocalData = useLocation();
    const Nav = useNavigate();
console.log(LocalData);
    return(
     <>
     <h1>產品 </h1>
     <button onClick={ ()=>{Nav("/")} }> 跳到首頁</button>
     </>
    );
}
export default Products;