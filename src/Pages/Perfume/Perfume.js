import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfume.css';

const Perfume = ({perfume}) => {
    const {_id, name, quantity, supplier, img, description, price} = perfume;
    const navigate = useNavigate();

    const updateStock = id =>{
        navigate(`/perfume/${id}`);
    }
    return (
        <div className='perfume'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <button onClick={() => updateStock(_id)} className='btn btn-primary'>Update Stock</button>
        </div>
    );
};

export default Perfume;