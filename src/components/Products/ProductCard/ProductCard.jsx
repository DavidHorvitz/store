import React from "react";
import productCard from './ProductCard.css';

const ProductCard = (props) => {
    // const { age, firstName, lastName, id } = props.user;

    const productName = props.productName;
    const department = props.department;
    const price = props.price;
    const id = props.id;
    return (
        <div className="productCard">
            <p>{productName}</p>
            <p>{department}</p>
            <p>{price}</p>
            <p>{id}</p>
        </div>
    );
}



export default ProductCard;