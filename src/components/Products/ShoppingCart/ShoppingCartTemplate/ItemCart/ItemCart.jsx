import React from "react";
import './ItemCart.scss';
import { connect } from "react-redux";

const ItemCart = props => {

    const data = props.productData.filter(i => i.id === props.data.id)[0];
    // console.log('ItemCart............');
    // console.log(data);

    return (
        <div className="ItemCart-continer">

            <div className="Cart-Items">

                <div className="image-box">

                    {/* <img src="images/apple.png" style={{ height="120px" }} /> */}
                </div>
                <div className="about">
                    <h1 className="title">{data.productName}</h1>
                    <h3 className="subtitle">{data.price}</h3>
                    {/* <img src="images/veg.png" style={{ height="30px" }}/> */}
                </div>

                <div className="counter">

                    <div className="btn">+</div>
                    <div className="count">{props.data.quantity}</div>
                    <div className="btn">-</div>
                </div>
                <div className="prices">
                    <div className="amount">{+data.price * props.data.quantity}</div>
                    <div className="save"><u>Save for later</u></div>
                    <div className="remove"><u>Remove</u></div>
                </div>
            </div>
        </div>

    );

}

// cartDate

const mapStateToProps = state => {
    return {
        productData: state.productData,
    }
}
export default connect(mapStateToProps, {})(ItemCart);