import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = (props) => {
    return (
        <nav>
            <NavLink exact activeClassName={'active'} to={'/'}>Home</NavLink>
            <NavLink replace activeClassName={'active'} to={'/films'}>Films</NavLink>
            <NavLink replace activeClassName={'active'} to={'/planets'}>Planets</NavLink>
            <NavLink replace activeClassName={'active'} to={'/people'}>People</NavLink>
            <NavLink replace activeClassName={'active'} to={'/species'}>Species</NavLink>
            <NavLink replace activeClassName={'active'} to={'/starships'}>Starships</NavLink>
            <NavLink replace activeClassName={'active'} to={'/vehicles'}>Vehicles</NavLink>
        </nav>
    )
}

export default Links;