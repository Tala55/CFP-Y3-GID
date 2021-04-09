import React from 'react';
import Images from "./images";
import img from '../Images/sample.png';
import Hala from '../Images/Hala.JPG';


export default function Aboutus() {
    return (
    <div>
        <div style = {{marginBottom : "150px" ,
      marginTop:" 70px " , textAlign: 'center', justifyContent: 'center' ,
       alignItems: 'center' , 
        }}>
        <h2 style = {{marginLeft : "38%" , width : '200px', 
        borderBottom : "4px solid red" ,fontSize : '40px', marginBottom : '30px'
        }}>About us </h2>
        <p style = {{fontSize : '20px'}}>Creativity and fun are our ingredients for awesome work.</p>
      
    


    </div>
      <div style={{display: "flex"}}>
      <Images/>
      </div>
        </div>
    )
}

 