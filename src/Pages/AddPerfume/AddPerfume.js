import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddPerfume = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    
    const onSubmit = newPerfume => {
        const url = `https://blooming-lowlands-86443.herokuapp.com/perfume`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPerfume)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            toast('Perfume added successfully!')
            reset();
        } )
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a new perfume</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' type="text" {...register("name", { required: true})} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
                <input className='mb-2' value={user?.email} type="email" {...register("email")}  />
                <input type="submit" value="Add Perfume" />
            </form>
        </div>
    );
};

export default AddPerfume;