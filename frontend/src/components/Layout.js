import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';

function Layout(){
    return (
        <div class="md:max-w-xl mx-auto bg-gray-100 h-full">
            <Header />
            <div class="h-[87%] px-4">
                <Outlet />
            </div>
            <Navbar />
        </div>
    )
}

export default Layout