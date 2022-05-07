import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='py-3 bg-secondary'>
            <p>&copy; {year} NS Perfumes. All Right Reserved</p>
        </div>
    );
};

export default Footer;