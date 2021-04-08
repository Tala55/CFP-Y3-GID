import React from 'react'
import Management from '../components/Tabs/Management/Management'
import './index.css'

function management() {
    return (
        <div>
        <div style={{textAlign:"center",fontFamily:"cursive",fontSize:'30px',marginTop:'100px',marginBottom:'40px',letterSpacing:"4px",}}>
    <div className="p" >
  <p >Time</p>
  <p>is</p>
  <p>gold</p>
  <p>do</p>
  <p >not</p>
  <p>waste</p>
  <p >it⏳</p>
  
</div >
</div>
        <div style={{marginTop:"50px",fontFamily:"cursive"}}>
            <h3 style={{textAlign:'center' ,color:"#a80c2b"}}>But what does it exactly mean?</h3>
            <h4>• Time is Valuable
Like gold, time is considered a valuable wealth. Because when we have time, we are capable of doing and having what we desire. Time gives us the liberty to do what we want and enjoy life. On the opposite, lack of time creates stress and unhappiness in our life.</h4>
            <h4>• Time is Indispensable
Like gold, time is irreplaceable. Once it is gone, it cannot be reproduced. It will take a rather vast event for it to happen that you can replace time. </h4>
            <h3 style={{textAlign:'center' ,color:"#a80c2b",marginTop:"20px"}}>Manage Your Time With Us</h3>
            <Management/>
         </div>
         
      
    
        </div>
    )
}

export default management
