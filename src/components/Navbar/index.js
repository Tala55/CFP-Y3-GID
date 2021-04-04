import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';


function Navbar() {
    return (
        <div className="start">
            <div className='Link'>
            <a href="/"className="special">⬅ Back</a>
        <Link to="/Calendar"className="line"> <a className="id1">Calendar</a> </Link>
        <Link  to="/TodoList"className="line"> <a className="id1">TodoList</a></Link>
        <Link  to="/Quotes"className="line"> <a className="id1">Quotes</a></Link>

            </div>
        </div>
    )
}

export default Navbar
