import React from "react";
import classes from './Layout.css';
import ProductBuilder from "../Products/ProductBuilder/ProductBuilder";
const Layout = (props) => (
    <div>
        <h1 id="os">Online shop</h1>
        <ProductBuilder />
    </div>

) ;
export default Layout;