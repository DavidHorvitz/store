import React from "react";
import ProductCard from "../ProductCard/ProductCard";
let productInformation_API = [
    { productName: 'A', department: 'Store', price: 25, id: 3435, },
    { productName: 'B', department: 'Store', price: 24, id: 34335, },
    { productName: 'C', department: 'Store', price: 5, id: 345, },
    { productName: 'D', department: 'Store', price: 4, id: 67874, },
    { productName: 'E', department: 'Store', price: 1.5, id: 9784, },
    { productName: 'F', department: 'Store', price: 1.4, id: 9484, },
    { productName: 'G', department: 'Store', price: 1.4, id: 4484, }
];

const ProductBuilder = () => (
    <div>
        {productInformation_API.map(p_Api => (
            <ProductCard
                key={p_Api.id} productName={p_Api.productName} department={p_Api.department}
                price={p_Api.price} id={p_Api.id} />
        ))}
    </div>
);




export default ProductBuilder;

