import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { connect } from 'react-redux';

// let productInformation_API = [
//     { productName: 'A', department: 'Store', price: 25, productId: 3435, },
//     { productName: 'B', department: 'Store', price: 24, productId: 34335, },
//     { productName: 'C', department: 'Store', price: 5, productId: 345, },
//     { productName: 'D', department: 'Store', price: 4, productId: 67874, },
//     { productName: 'E', department: 'Store', price: 1.5, productId: 9784, },
//     { productName: 'F', department: 'Store', price: 1.4, productId: 9484, },
//     { productName: 'G', department: 'Store', price: 1.4, productId: 4484, }
// ];
// productName
// department
// price
// productId

const ProductBuilder = props => {
    return (
        <div>
            {props.productData.map((p_Api, index) => (
                <ProductCard
                    key={p_Api.id} productName={p_Api.productName} department={p_Api.department}
                    price={p_Api.price} id={p_Api.id} />
            ))}
        </div>
    );
}




// export default ProductBuilder;
const mapStateToProps = state => {
    return {
        productData: state.productData
    }
}
export default connect(mapStateToProps, {})(ProductBuilder);
