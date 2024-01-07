import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './Navber';

const Main = () => {
    return (
        <div>
            <Navber />
            <div className='mx-20 my-10'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;