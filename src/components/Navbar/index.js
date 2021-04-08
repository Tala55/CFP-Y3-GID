import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


function Navbar() {
    return (
        <div className="start">
            <div className='Link'>
            {/* <a href="/"className="special">⬅ Back</a> */}
        <Link to="/Home"className="line"> <a className="id1">Home</a> </Link>
        <Link  to="/Management"className="line"> <a className="id1">Management</a></Link>
        <Link  to="/Quotes"className="line"> <a className="id1">inspiration</a></Link>
        <Link  to="/Quotes"className="line"> <a className="id1">About us</a></Link>
            </div>
        </div>
    )
}

export default Navbar
