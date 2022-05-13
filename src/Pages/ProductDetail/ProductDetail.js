import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { productId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [item])

    const handleQuantityStockItem = event => {
        const proceed = window.confirm('Are you sure?');
        event.preventDefault();
        let newQuantity = parseInt(event.target.quantity.value);
        const updatedQuantity = (item.quantity + newQuantity);
        console.log(updatedQuantity);

        if (proceed) {
            const url = `http://localhost:5000/item/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updatedQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    event.target.reset();
                })
        }
    }

    const handleQuantityDeleteItem = event => {
        const proceed = window.confirm('Are you sure?');
        event.preventDefault();
        const deleteQuantity = parseInt(item.quantity);
        const updatedQuantity = (deleteQuantity - 1);
        console.log(updatedQuantity);

        if (proceed) {
            const url = `http://localhost:5000/item/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updatedQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    event.target.reset();
                })
        }
    }

    return (
        <div>
            <div className=' product-detail bg-light bg-gradient p-5 mt-5'>
                <img className='w-100 mx-auto' src={item.img} alt="" />
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Supplier: {item.supplierName}</p>

                <form onSubmit={handleQuantityStockItem}>
                    <input className='input-field' type="number" name="number" id="quantity" placeholder='Quantity Add:' />
                    <input className='quantity-add' type="submit" value="Quantity Add" />
                </form>
                <input onClick={handleQuantityDeleteItem} className='quantity-delete' type="submit" value="Quantity Delivered" />
            </div>
            <div className='review-button'>
                <div className='review-border'></div>
                <button className='all-review-btn'>
                    <Link className='text-white text-decoration-none
                        ' to={'/manageitem'}>ALL MANAGE ITEMS<FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon></Link>
                </button>
                <div className='review-border'></div>
            </div>
        </div>
    );
};

export default ProductDetail;