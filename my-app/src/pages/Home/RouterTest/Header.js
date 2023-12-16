import React from "react";
import { Link ,NavLink} from "react-router-dom";//超連結

//replace 不紀錄(回上一頁時不會紀錄上一次的) 不想紀錄History
const Header =()=>{
    return (
        <nav>
             <span><Link to="/" replace>
                首頁
                </Link></span> 
                |
                 <span><Link to="/pr" state={{HaderToProductPageData:"123123"}}>產品</Link>
                 </span> 
<br/>
<span>
                 <NavLink to="/" replace  className={({isActive}) => !isActive ? "active" : ""}>
                  首頁_NavLink
                </NavLink></span> 
                |
                 <span>
                    <NavLink to="/pr" state={{HaderToProductPageData:"123123"}}
                    className={({isActive}) => !isActive ? "active" : ""}>
                        產品_NavLink
                    </NavLink>

                 </span>


        </nav>
    );
};
export default Header;