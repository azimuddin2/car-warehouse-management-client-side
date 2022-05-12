import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useItems from '../../hooks/useItems';
import './ManageItem.css'

const ManageItem = () => {
    const [products, setProducts] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div className='container'>
            <h1>Manage Item</h1>
            <div className='products-container'>
                {
                    products.map(product => <div className='product-containerm ' key={product._id}>
                        <div className=''>
                            <div className='p-2 rounded-3'>
                                <img className='w-100 bg-light rounded-3 p-5' src={product.img} alt="" />
                            </div>
                            <div className=' p-4 pt-0'>
                            <h5>{product.name}</h5>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                            <p>{product.quantity}</p>
                            <p>{product.supplierName}</p>
                            <button className='product-btn' onClick={() => handleDelete(product._id)}>Delete <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                            </div>
                            
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageItem;