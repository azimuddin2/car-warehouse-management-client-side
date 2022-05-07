import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { id, img, name, price, description, quantity, supplierName } = product;

    return (
        <div className='product-container m-3'>
            <div className='p-2 rounded-3'>
                <img className='w-100 bg-light rounded-3 p-5' src={img} alt="" />
            </div>
            <div className='p-4 pt-0'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>{description}</p>
                <p>quantity: {quantity}</p>
                <p>Supplier: {supplierName}</p>
                <button className='btn btn-primary px-5'>
                    UPDATE
                </button>
            </div>

        </div>
    );
};

export default Product;