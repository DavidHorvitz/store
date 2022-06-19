import React, { useEffect } from "react";
import classes from './MainProduct.css';
import ProductBuilder from "../ProductBuilder/ProductBuilder";
import Header from "../../Templetes/Wrapper/Header";
import Aside from "../../Templetes/Wrapper/Aside";
import Footer from "../../Templetes/Wrapper/Footer";
import { Route, Routes } from "react-router-dom";
import ShoppingCartTemplate from "../ShoppingCart/ShoppingCartTemplate/ShoppingCartTemplate";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { getAllProducts } from '../../../action/getData';
import { connect } from "react-redux";


const MainProduct = (props) => {
    useEffect(() => {
        props.getAllProducts();
    }, [])
    return (
        <div>
            <Header />
            <Aside />
            <Routes>
                <Route exect path="/" element={<ProductBuilder />} />
                <Route path="/aaa/" element={<div>hghghg</div>} />
                <Route path="products" element={<MainProduct />} />
                <Route path="shopping-cart-template" element={<ShoppingCartTemplate />} />
                <Route path="/beyond_payment" element={<ShoppingCart />} />
            </Routes>

            <Footer />


            {/* <ProductBuilder /> */}

        </div>
    );

};
// export default MainProduct;
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { getAllProducts })(MainProduct);