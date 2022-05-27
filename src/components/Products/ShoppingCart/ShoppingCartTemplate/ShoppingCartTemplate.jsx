import React, { useEffect, useState } from "react";
import shoppingCartTemplate from './ShoppingCartTemplate.css';
import ButtonClose from "../../../Templetes/ButtonClose/ButtonClose";
import { useNavigate } from "react-router-dom";

const ShoppingCartTemplate = (props) => {
    const navigate = useNavigate();
    const [close, setClose] = useState(true);
    // const [to_cart, set_move_to_cart] = useState(true);
    // const [count, setCount] = useState(0);


    // function countUp() {
    //     if (count === 5) {
    //         alert('Limited to 5 products')
    //         setCount(count = 5);

    //     } else
    //         setCount(count + 1);
    // }
    // function countDown() {
    //     if (count === 0) {
    //         setCount(0)
    //     } else
    //         setCount(count - 1);
    // }
    useEffect(() => {
        if (!close) navigate('/');
        // if (!close) navigate('/product');
    }, [close]);
    // useEffect(() => {
    
    //     if (!to_cart) navigate('/shopping_cart'); 
    // }, [to_cart]);

    return (
        <div className="CartContainer">
            <ButtonClose close={setClose} />
            <div className="Header">
                <h3 className="Heading">Shopping Cart</h3>
                <h5 className="Action">Remove all</h5>
            </div>

            <div className="Cart-Items">

                <div className="image-box">

                    {/* <img src="images/apple.png" style={{ height="120px" }} /> */}
                </div>
                <div className="about">
                    <h1 className="title">Apple </h1>
                    <h3 className="subtitle">250ml</h3>
                    {/* <img src="images/veg.png" style={{ height="30px" }}/> */}
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
                    {/* <img src="images/grapes.png" style={{ height="120px" }} /> */}
                </div>
                <div className="about">
                    <h1 className="title">Grapes </h1>
                    <h3 className="subtitle">250ml</h3>
                    {/* <img src="images/veg.png" style={{ height="30px" }}/> */}
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
                <button className="button" onClick={() => navigate("/beyond_payment")}>Checkout</button></div>
        </div>
      
    );

}
export default ShoppingCartTemplate;