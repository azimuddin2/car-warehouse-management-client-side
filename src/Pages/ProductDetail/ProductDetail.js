import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();

    return (
        <div className='mx-auto w-50'>
            <h1>This is product detail:{productId}</h1>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
            </Link>
        </div>
    );
};

export default ProductDetail;