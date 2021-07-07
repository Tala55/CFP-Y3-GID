import React from "react";
import { Link } from "react-router-dom";
import "./management.css";

function Management() {
  return (
    
    <div  style={{marginTop:'40px',justifyContent:'center',marginLeft:'40px'}}>
  
        
        <Link to="/Todolist" className='kill' id="img1" >
          <h4 style={{marginTop:"250px",textAlign:'center'}}>TodoList </h4>
          </Link>
        <Link  to="/Reminder" className='kill'id='img2'><h4 style={{marginTop:"250px",textAlign:'center'}}> Reminder</h4></Link>
        <Link  to="/Quotes" className='kill'id='img3'><h4 style={{marginTop:"250px",textAlign:'center'}}> Quotes</h4> </Link>
       
            </div>
  );
}

export default Management;
