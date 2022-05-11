import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId)
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    const handleQuantityStockItem = event => {
        event.preventDefault();
        let newQuantity = parseInt(event.target.quantity.value);
        // console.log(newQuantity)
        const updatedQuantity = (item.quantity + newQuantity);
        console.log(updatedQuantity);

        const url = `http://localhost:5000/item/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({updatedQuantity})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
            })
    }




    const handleQuantityDeleteItem = event => {
        event.preventDefault();
        const deleteQuantity = parseInt(item.quantity);
        const updatedQuantity = (deleteQuantity - 1);
        console.log(updatedQuantity);

        const url = `http://localhost:5000/item/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({updatedQuantity})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
            })
    }



    return (
        <div className='mx-auto w-50 bg-light bg-gradient p-5 mt-5'>
            <img className='w-100 mx-auto' src={item.img} alt="" />
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Supplier: {item.supplierName}</p>

            <form onSubmit={handleQuantityStockItem}>
                <input type="number" name="number" id="quantity" />
                <input className='btn btn-primary ms-5' type="submit" value="Quantity Add" />

            </form>

            
            <input onClick={handleQuantityDeleteItem}  className='btn btn-primary ms-5' type="submit" value="Quantity Delete" />


            <br />
            <br />
            <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
            </Link>
        </div>
    );
};

export default ProductDetail;