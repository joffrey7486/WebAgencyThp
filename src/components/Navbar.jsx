import React from 'react';
import { Link } from 'react-router-dom';
import CellWifiOutlinedIcon from '@mui/icons-material/CellWifiOutlined';

const Navbar = () => {

    return (
        <nav className='navbar'>
            <CellWifiOutlinedIcon className='icon'/>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
            <Link to="/works">Projets</Link>
        </nav>
    );
};

export default Navbar;