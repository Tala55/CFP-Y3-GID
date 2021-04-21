import React from 'react'
import './ins.scss'
import {AiFillFire} from 'react-icons/ai'
import  Inspiration from './inspiration'

function ins() {
    
    return (
        <div>
				<div>
					<Inspiration/>
					</div>
    <div>
		<h2 style={{marginBottom:"50px",marginTop:"100px",textAlign:"center",fontFamily:"cursive",fontSize:"40px",color:"black"}}><AiFillFire style={{color:'black',marginTop:'-11px'}}/>Some successful stories that created history<AiFillFire style={{color:'black',marginTop:'-5px'}}/> </h2>
	</div>

<nav class="nav">
	<ul class="nav-list">
		<li class="nav-item">
			<div class="nav-item-bg"></div>
			<div class="nav-item-content">
				<span class="date"> (1955 – ) </span>
				<h2>Bill <br/> Gates</h2>
				<button style={{itemSize:"50px"}} className="Clickhere"><a style={{fontSize:"30px",color:'white',fontFamily:'cursive'}}href="https://en.wikipedia.org/wiki/Bill_Gates">Read More</a></button>
			</div>
		</li>

		<li class="nav-item">
			<div class="nav-item-bg"></div>
			<div class="nav-item-content">
				<span class="date"> (1955 – 2012) </span>
				<h2>Steve <br/> Jobs</h2>
				<button style={{itemSize:"50px"}} className="Clickhere"><a style={{fontSize:"30px",color:'white',fontFamily:'cursive'}} href="https://en.wikipedia.org/wiki/Steve_Jobs ">Read More</a></button>
			</div>
		</li>

		<li class="nav-item">
			<div class="nav-item-bg"></div>
			<div class="nav-item-content">
				<span class="date">(1954 – ) </span>
				<h2>Oprah <br/> Winfrey</h2>
				<button style={{itemSize:"50px"}} className="Clickhere"><a style={{fontSize:"30px",color:'white',fontFamily:'cursive'}} href="https://en.wikipedia.org/wiki/Oprah_Winfrey ">Read More</a></button>
			</div>
		</li>

		<li class="nav-item">
			<div class="nav-item-bg"></div>
			<div class="nav-item-content">
				<span class="date">(1981 – ) </span>
				<h2>Serena<br/> Williams</h2>
				<button style={{itemSize:"50px"}} className="Clickhere"><a style={{fontSize:"30px",color:'white',fontFamily:'cursive'}} href="https://en.wikipedia.org/wiki/Serena_Williams ">Read More</a></button>
			</div>
		</li>
	</ul>
</nav>
				
     </div>
    )
}

export default ins
