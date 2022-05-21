import React from "react";
import Button from "../../StyleComponents/Button/Button";
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
            <Button />
        </div>
    );
}



export default ProductCard;