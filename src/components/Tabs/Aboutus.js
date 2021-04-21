import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa' 
import {FaInstagram} from 'react-icons/fa'
import Hala1 from '../Images/Hala1.png';
import Hala2 from '../Images/Hala2.png'
import Hala3 from '../Images/Hala3.png'
import Tala1 from '../Images/Tala1.png'
import Tala2 from '../Images/Tala2.png'
import Sama1 from '../Images/Sama1.png'
import Tala4 from '../Images/Tala4.png'
import Dog from '../Images/dog.png'
import "./Aboutus.css"


export default function Aboutus() {
    return (
        <div>
              <div style = {{marginBottom : "-110px" ,
              marginTop:" 70px " , textAlign: 'center', justifyContent: 'center' ,
              alignItems: 'center' , 
                }}>
                <h2 style = {{marginLeft : "38%" , width : '200px', 
                borderBottom : "3px solid #a80c2b" ,fontSize : '40px', marginBottom : '30px',fontFamily:'cursive'
                }}>About us </h2>
                <p style = {{fontSize : '20px',fontFamily:'cursive',width:"660px",marginLeft:'210px'}}>Our team decided to create this app to make it easier for you to manage your time and to be able to plan everything for your day, hoping that you will have a great experience using it. So know more about our team.</p>

                </div>
                <div  style={{display:'flex',marginLeft:'70px'}}>
                <div class="person" >
                <div class="person-badge">
              
              <img src={Hala1} style={{height:'315px',marginBottom:'-90px',width:"340px",marginLeft:"-30px"}}class="normal" />
               <img class="peculiar"style={{height:'440px',marginBottom:'-100px',width:"340px",marginLeft:"-60px"}} src={Hala2}/> 
              {/* <img class="peculiar"style={{ height:'420px',marginBottom:'-80px',width:"275px",marginLeft:"-10px"}} src={Hala3}/> */}
              </div>
                </div>  
              <div class="person">
                <div class="person-badge">
             
                <img src={Tala1} class="normal"  style={{height:'310px',marginBottom:'-50px',marginLeft:"-10px"}} />
                <img class="peculiar" style={{height:'400px',marginBottom:'-2px',marginLeft:"-10px"}}src={Tala2}/>
                </div>
                </div>
              <div class="person">
                <div class="person-badge">
                <img src={Sama1} class="normal"  style={{height:'310px',marginBottom:'-40px',marginLeft:"-30px"}} />
                <img class="peculiar" src={Dog}  style={{height:'400px',marginBottom:'-90px',marginLeft:"-10px"}}/>
                </div>
                </div>
              
                </div>
                <div style={{fontFamily:'cursive'}}>
                  <h2 style={{marginTop:'250px',marginLeft:'70px',fontSize:"30px"}}>Hala Abunahla</h2>
                  <h2 style={{marginTop:'-45px',marginLeft:'430px',fontSize:"30px"}}>Tala Mohanna</h2>
                  <h2 style={{marginTop:'-44px',marginLeft:'770px',fontSize:"30px"}}>Sama Almallak</h2>
                </div>
            
          <div>
              <div style={{borderTop:"1px solid black",marginTop:'100px'}}>    
              <p style={{fontFamily:"cursive",marginTop:"30px"}}>Need a hand? Or need a highfive? <br/>Here's how to reach us:</p>
              <h2 style={{fontFamily:'cursive',fontSize:'22px'}}>✉️ GitItDone@gmail.com</h2>
              <h2 style={{fontFamily:'cursive',fontSize:'23px'}}>📞 08288765222</h2>
              </div>
            
              <div class="social1" style={{
padding:"30px"}}>
                <a href="https://www.facebook.com/tala.mohanna.7"className="icon1" style={{marginRight:"25px"}} ><FaFacebook/> </a>
                <a href="https://twitter.com/?lang=en" className="icon1" style={{marginRight:"25px"}}><FaTwitter /> </a>
                <a href="https://www.instagram.com/" className="icon1" ><FaInstagram /> </a>
              </div>
             
    </div>
    </div>
    )
}

 