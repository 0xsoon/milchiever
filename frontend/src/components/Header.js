import React from 'react';
import Logo from "../images/goals.png"
import Gear from '../images/gear.png';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div class="px-7 py-3 flex h-[6.5%]">
            <div class="flex w-1/2 text-left items-center">
                <Link to="/home" class="flex">
                    <img className="h-[33px] w-[33px] mr-1.5" src={Logo} alt="Milchiever Logo" />
                    <h1 className="text-[23px] font-bold text-black">milchiever</h1>
                </Link>
            </div>
            <div class="w-1/2 text-right h-full p-0.5">
                <img className="ml-auto h-full" src={Gear} alt="Settings" />
            </div>
        </div>
    )
}

export default Header;