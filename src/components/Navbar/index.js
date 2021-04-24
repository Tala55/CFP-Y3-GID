import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Logo from '../Images/logo3.png';


function Navbar() {
    return (
     <div className='start'>
             
               
                <div >
                <div class="header-section clear" style={{marginBottom:'-40px',height:"63px",}} >
        <div class="mid-content" >
            <div class="header-logo left" style={{marginLeft:'30px'}}>
                <a class="logo" > </a>
                    <img style={{height:"200px",width:"300px",marginTop:"-70px"}} src={Logo} alt=""/>
                    
               
            </div>
            <div class="header-menue left" >
                <div class="primary-menue" >
                    <ul style={{display:"flex",marginLeft:"300px",marginTop:"-130px"}}>
                        <li style={{ marginLeft: '70px'}} ><a href="/">Home</a></li>
                
                        <li style={{ marginLeft: '80px',}}><a href="/Management">Management▼ 
                        </a>
                       
                        <ul style={{width:'250px',textAlign:"center",marginLeft:"-30px",marginTop:"-1px",backgroundColor:"#ada8a8 ", }}>
                            <li><a href="/Todolist">Todolist</a></li>
                            <li><a href="/Reminder">Reminder</a></li>
                            <li><a href="/Quotes">Quotes</a></li>
                        </ul>
                        </li>
                        <li style={{ marginLeft: '80px'}}><a href="/inspiration">Inspiration</a></li>
                        <li style={{ marginLeft: '80px'}}><a href="/Aboutus">About</a></li>
                    </ul>
                </div>
            </div>
         
        </div>
    </div>
                </div>
        </div>
        
    
    )
}


export default Navbar
 
