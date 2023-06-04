import React from 'react';
import { Link } from 'react-router-dom';

import HomeLogo from '../images/home.png';
import CalendarLogo from '../images/calendar.png';
import AddGoalsLogo from '../images/more.png';
import GoalsLogo from '../images/clipboard.png';
import DiaryLogo from '../images/diary.png';

const navbarOptions = [
    {
        name: 'Home',
        logo: HomeLogo
    },
    {
        name: 'Calendar',
        logo: CalendarLogo
    },
    {
        name: 'AddGoals',
        logo: AddGoalsLogo
    },
    {
        name: 'Goals',
        logo: GoalsLogo
    },
    {
        name: 'Diary',
        logo: DiaryLogo
    }
]

function Navbar(){
    return (
        <nav class="fixed inset-x-0 bottom-0 h-[6.5%] px-3 pb-5 pt-2 flex justify-evenly md:max-w-xl md:mx-auto">
            {
                navbarOptions.map(option => {
                    return (
                        <Link class="h-full" to={option.name.toLowerCase()}>
                            <img class="h-full" src={option.logo} alt={option.name}/>
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Navbar;