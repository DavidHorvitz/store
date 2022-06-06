import React, { useEffect, useState } from "react";
import shoppingCartTemplate from './ShoppingCartTemplate.css';
import ButtonClose from "../../../Templetes/ButtonClose/ButtonClose";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import ItemCart from "./ItemCart/ItemCart";

const ShoppingCartTemplate = (props) => {

    const data = props.cartDate;
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
            {data.map((item, index) => (
                <ItemCart key={index} data={item}/>
            ))}
            <div className="Cart-Items">

                <div className="image-box">

                </div>
                <div className="about">
                </div>

                <div className="counter">

                    <div className="btn">+</div>
                    <div className="count">2</div>
                    <div className="btn">-</div>
                </div>
               
            </div>

            <div className="Cart-Items pad">
                <div className="image-box">
                </div>
               
             
               
            </div>

            <div className="checkout">
                <div className="total">
                        <div className="Subtotal">Sub-Total</div>
                </div>
                <button className="button" onClick={() => navigate("/beyond_payment")}>Checkout</button></div>
        </div>

    );

}

// cartDate

const mapStateToProps = state => {
    return {
        cartDate: state.cartDate,
    }
}
export default connect(mapStateToProps, {})(ShoppingCartTemplate);