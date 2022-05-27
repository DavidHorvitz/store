import React from "react";
import ButtonCount from "../../Templetes/ButtonCount/ButtonCount";
import productCard from './ProductCard.css';

const ProductCard = (props) => {
    // const { age, firstName, lastName, id } = props.user;

    const productName = props.productName;
    const department = props.department;
    const price = props.price;
    const id = props.id;
    return (
        <div className="card">
            <p> Name : {productName}</p>
            <p> Department : {department}</p>
            <p className="price"> price : {price}</p>
            <p>{id}</p>
            <ButtonCount />
        </div>
    );
}



export default ProductCard;