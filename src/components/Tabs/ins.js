import React from 'react'
import './ins.scss'
import {AiFillFire} from 'react-icons/ai'
import Tips from '../Images/tips.png'


function ins() {
    
    return (
        <div>
				<div>
					</div>
    <div>
		<h2 style={{marginBottom:"50px",marginTop:"100px",textAlign:"center",fontFamily:"cursive",fontSize:"40px",color:"black",fontWeight:"bolder"}}>Some successful stories that created history</h2>
		<p style={{fontFamily:"cursive",fontSize:"20px",textAlign:'center'}}>Success to me means Believing in yourself, loving yourself and being happy with who you are. The basic tenet of those who wish to succeed is to be willing to fail. You must take 100% responsibility for EVERYTHING you experience in life. We learn from our failures. A successful person accepts personal responsibility and takes the creator role in their lives. No one can change our lives but ourselves. We are the master of our own universe!!
Everything we want in life involves risks.</p>
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
		<div style={{backgroundColor:"#f1f7ff",  marginRight: '-150px',
    marginLeft:' -130px',
    padding: '100px 40px',
	marginBottom:"100px",
	marginTop:'79px'
}}>
			
		<p style={{fontFamily:"cursive",textAlign:"center",fontSize:"30px"}}>Time management is the process of planning and controlling how much time to spend on specific activities. Good time management enables an individual to complete more in a shorter period of time, lowers stress, and leads to career success. </p>	
		<img style={{display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto',
			width: '50%', }}src={Tips}/> 
		</div>		
		<div>
			<h2 style={{textAlign:"center",fontSize:"50px",}}>
			Benefits of Time Management
			</h2>
			<p style={{marginTop:"60px",fontSize:"20px"}}>
				 
<span style={{color:'#a80c2b',fontWeight:'bold',}}>
1. Stress relief</span>
<br/>
Making and following a task schedule reduces anxiety. As you check off items on your “to-do” list, you can see that you are making tangible progress. This helps you avoid feeling stressed out with worry about whether you’re getting things done.

 <br/>
 </p>
 <p style={{fontSize:"20px"}}>
 <span style={{color:'#a80c2b',fontWeight:'bold',}}>
2. More time</span>
<br/>

Good time management gives you extra time to spend in your daily life. People who can time-manage effectively enjoy having more time to spend on hobbies or other personal pursuits.

<br/>
</p>
<p style={{fontSize:"20px"}}>
<span style={{color:'#a80c2b',fontWeight:'bold',}}>
3. More opportunities</span>
<br/>
Managing time well leads to more opportunities and less time wasted on trivial activities. Good time management skills are key qualities that employers look for. The ability to prioritize and schedule work is extremely desirable for any organization.

<br/>
</p>
<p style={{fontSize:"20px"}}> 
<span style={{color:'#a80c2b',fontWeight:'bold',}}>
4. Ability to realize goals</span>
<br/>
Individuals who practice good time management are able to better achieve goals and objectives, and do so in a shorter length of time.

<br/>
			</p>
		</div>
     </div>
    )
}

export default ins
