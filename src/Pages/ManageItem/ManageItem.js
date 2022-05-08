import React from 'react';
import useItems from '../../hooks/useItems';

const ManageItem = () => {
    const [products] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            
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