import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const item = products.slice(0, 6);

    useEffect(() => {
        fetch('https://murmuring-dusk-95457.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products'>
            <div className='container'>
                <h1 className='product-title text-center pt-5'>car Items</h1>
                <div className='products-container'>
                    {
                        item.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className='review-button'>
                    <div className='review-border'></div>
                    <button className='all-review-btn'>
                        <Link className='text-white text-decoration-none
                        ' to={'/reviews'}>SHOW ALL CARS<FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon></Link>
                    </button>
                    <div className='review-border'></div>
                </div>
            </div>
        </div>
    );
};

export default Products;