import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () =>{
    const Nav = useNavigate();
useEffect( ()=>{
    setTimeout(() => {
        Nav("/")//跳轉頁面
    }, 3000);//等三秒
})

    return(
        <h1>無法找到該頁面!三秒後將自動跳回首頁</h1>
    );
}
export default NotFound;