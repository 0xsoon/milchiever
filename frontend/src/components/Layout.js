import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Navbar from './Navbar';

function Layout(){
    return (
        <div class="md:max-w-xl mx-auto bg-gray-100 h-screen">
            <Header />
            <div class="h-[87%] p-3 py-2">
                <Outlet />
            </div>
            <Navbar />
        </div>
    )
}

export default Layout