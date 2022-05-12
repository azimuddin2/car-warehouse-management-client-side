import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='form mx-auto mt-5 bg-light p-5 border rounded-3'>
            <h1 className='add-service'>Please add a service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} required />
                <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} required />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} required />
                <textarea className='mb-3' placeholder='Description' {...register("description")} required />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} required />
                <input className='mb-3' placeholder='Supplier Name' {...register("supplierName", { required: true, maxLength: 20 })} required />

                <input className='add-button' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;