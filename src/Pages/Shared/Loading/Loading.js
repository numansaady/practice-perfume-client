import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height: '600px'}} className='d-flex justify-content-center align-items-center'>
              <Spinner animation="grow" variant="success" />
        </div>
    );
};

export default Loading;