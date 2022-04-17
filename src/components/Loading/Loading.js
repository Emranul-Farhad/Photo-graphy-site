import React from 'react';
import { Audio, BallTriangle, Plane } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <Plane
                    height="400"
                    width="400"
                    color='red'
                    ariaLabel='loading-indicator'
                />
            </div>
        </div>
    );
};

export default Loading;