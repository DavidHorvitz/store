import React, { useEffect, useState } from "react";
import shoppingCart from './ShoppingCart.css';
import ButtonClose from "../../Templetes/ButtonClose/ButtonClose";
import { Navigate, useNavigate } from "react-router-dom";

const ShoppingCart = (props) => {
    const navigate = useNavigate();
    const [close, setClose] = useState(true);
    const [to_cart, set_move_to_cart] = useState(true);

    useEffect(() => {
        if (!close) navigate('/');
        // if (!close navigate('/product');
    }, [close]);

    return (
        <div className="CartContainer">
            <ButtonClose close={setClose} />
            <div className="Header">
                <h3 className="Heading">Shopping Cart</h3>
                <h5 className="Action">Remove all</h5>
            </div>

            <div className="Cart-Items">

                <div className="image-box">


                </div>
                <div className="about">
                    <h1 className="title">Apple </h1>
                    <h3 className="subtitle">250ml</h3>
                </div>

                <div className="counter">

                    <div className="btn">+</div>
                    <div className="count">2</div>
                    <div className="btn">-</div>
                </div>
                <div className="prices">
                    <div className="amount">$2.99</div>
                    <div className="save"><u>Save for later</u></div>
                    <div className="remove"><u>Remove</u></div>
                </div>
            </div>

            <div className="Cart-Items pad">
                <div className="image-box">
                </div>
                <div className="about">
                    <h1 className="title">Grapes </h1>
                    <h3 className="subtitle">250ml</h3>
                </div>
                <div className="counter">
                    <div className="btn">+</div>
                    <div className="count">1</div>
                    <div className="btn">-</div>
                </div>
                <div className="prices">
                    <div className="amount">$3.19</div>
                    <div className="save"><u>Save for later</u></div>
                    <div className="remove"><u>Remove</u></div>
                </div>
            </div>

            <div className="checkout">
                <div className="total">
                    <div>
                        <div className="Subtotal">Sub-Total</div>
                        <div className="items">2 items</div>
                    </div>
                    <div className="total-amount">$6.18</div>
                </div>
                {/* <button className="button" onClick={() => Navigate("/beyond_payment")}>Beyond payment</button> */}
            </div>
        </div>

    );

}
export default ShoppingCart;