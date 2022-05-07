import React from 'react';
import './Product.css';

const Product = ({product}) => {
    const {id, img, name, price, description, quantity, supplierName} = product;

    return (
        <div className='product-container p-5 m-3'>
            <h1>{id}</h1>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <p>quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
        </div>
    );
};

export default Product;