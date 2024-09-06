import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Header";
import ProdContent from "./ProdContent";
import Cart from "./Cart";
import Footer from "./Footer";

export default function Products () {
    return (
        <div className="">
            <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ProdContent />} />
                <Route path="/cart" element={<Cart />}/>
            </Routes>
            <Footer />
            </Router>
            
           
        </div>
    )
}