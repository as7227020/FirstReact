//useRoutes 客製化Route
import { Routes, Route, useRoutes } from "react-router-dom";


import "./RouterTest/App.css"

//頁面引用
import Header from "./RouterTest/Header"
import Home from "./RouterTest/Home"
import Products from "./RouterTest/Products";
import Product from "./RouterTest/Product";
import NotFound from "./RouterTest/NotFound";
import Features from "./RouterTest/Features";
import ProductLayout from "./RouterTest/ProductLayout";
import producrRoutes from "../../routes/productRoutes"


const Home2 = () => {

    //把設定好的RoutesList丟進useRoutes
    const productLisRouting = useRoutes(producrRoutes);

    return (
    <div>HO
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>

            {/* <Route path="/pr" element={<Products />}/>
            <Route path="/pr/:sendId" element={<Product />}/> 
            */}

            <Route path="/pr" element={<ProductLayout/>}>
                <Route index element={<Products />}/>
                  <Route path=":sendId" element={<Product />}/>

            </Route>



            <Route path="/Features" element={<Features />}/>
            <Route path="*" element={<NotFound />}/>
            
        </Routes>
        {/*{productLisRouting} 如要使用producrRoutes的話用這邊*/}
    </div>

    );
}
export default Home2;

