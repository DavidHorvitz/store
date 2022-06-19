import React from "react";
import { useNavigate } from "react-router-dom";
// import header from './wrapper.css'
import './header.scss'
const Header = (props) => {
    const navigate = useNavigate();

    return (
        <header id="header">
            <h1 id="os">Online shop</h1>
            <div className="button_Continer">
                <div className="add_to_cart_button" onClick={() => navigate("/shopping-cart-template")}>shopping Cart Template</div>
                <div className="add_to_cart_button" onClick={() => navigate("/aaa")}>aaaa</div>
            </div>
        </header>
    )
}
export default Header;