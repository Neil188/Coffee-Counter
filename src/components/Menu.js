import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDaysIcon from 'react-icons/lib/fa/table';


const Menu = () =>
    <nav className='menu'>
        <NavLink to='/' activeClassName='selected' replace>
            <HomeIcon />
        </NavLink>
        <NavLink to='/add-coffee' activeClassName='selected' replace>
            <AddDayIcon />
        </NavLink>
        <NavLink to='/list-days' activeClassName='selected' replace>
            <ListDaysIcon />
        </NavLink>
    </nav>

export default Menu;