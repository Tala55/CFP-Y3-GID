import React from "react";
import Time from "../Images/time.jpg"
// import {Bounce} from 'react-animations'

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
 
<div>
            <img src={Time} style={{height:"100vh",width:"100vw",backgroundSize:' cover',
          backgroundPosition:' center',
          marginLeft: '-130px',}}/>
            <div className="content">
                 <div className="text">
        <h1 style={{color: '#00a0dc', fontSize: "5em", marginleft: "100px", color: "white",position:"absolute",marginTop:"-450px", fontFamily:'inherit'}}>
          {/* system-ui  */}
          {/* sans-serif  */}
          have fun&get it done

        </h1>
        </div>
       
      </div>
      </div>
      
   

  );
};

export default Hero;
