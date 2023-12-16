
import Features from "../pages/Home/RouterTest/Features";
import Home from "../pages/Home/RouterTest/Home";
import Product from "../pages/Home/RouterTest/Product";
import ProductLayout from "../pages/Home/RouterTest/ProductLayout";
import Products from "../pages/Home/RouterTest/Products";



const productList =[
    {
        path:"/pr",
        element : <ProductLayout/>,
        children :[
            {path : "" ,element : <Products />},//如path為空 會自動改為使用上方的path(/pr路徑)
            {path : ":sendId" ,element : <Product />}
        ]
    }
];

export default productList;