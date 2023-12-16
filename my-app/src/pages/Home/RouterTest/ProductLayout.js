import React from "react";
import { Link,Outlet } from "react-router-dom";

const ProductLayout = () =>{
    return (

        <>
         <nav>
            <span>
             <Link to="/pr/1">產品1</Link>
             </span>
             |
            <span>
                <Link to="/pr/2">產品2</Link>
                </span>
                |
                <span>
                    <Link to="/Features">未來</Link>
                </span>
          </nav>
        <Outlet context={{toSendMsg:"HIHI 我的下面要引用useOutletContext喔!"}} />{/*有窩蜂結構的Router使用*/}
    </>

    );
}
export default ProductLayout;