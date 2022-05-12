import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const ReviewsItem = () => {
    const [products, setProducts] = useState([]);
    // const item = products.slice(0, 6);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div id='products'>
            <div className='container'>
                <h1 className='product-title text-center pt-5'>car Items</h1>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                
            </div>
            </div>
    );
};

export default ReviewsItem;