import React from 'react';
import useItems from '../../hooks/useItems';

const ManageItem = () => {
    const [products, setProducts] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
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
        <div>
            <h1>Manage Item</h1>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name}<button onClick={() => handleDelete(product._id)}>X</button></h5>
                    {/* <button>X</button> */}
                </div>)
            }
        </div>
    );
};

export default ManageItem;