import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../action/cartHeandler";
import ButtonCount from "../../Templetes/ButtonCount/ButtonCount";
import productCard from './ProductCard.css';

const ProductCard = (props) => {
    // const { age, firstName, lastName, id } = props.user;

    const navigate = useNavigate();


    const productName = props.productName;
    const department = props.department;
    const price = props.price;
    const id = props.id;

    const addToCart = () => {
        props.addToCart({
            id: id,
            productName: productName,
            department: department,
            price: price,
        }, navigate);
    };

    return (
        
            <div className="card">
                <p> Name : {productName}</p>
                <p> Department : {department}</p>
                <p className="price"> price : {price}</p>
                <p>{id}</p>
                <ButtonCount clicked={addToCart} />
            </div>
    
    );
}





const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { addToCart })(ProductCard);