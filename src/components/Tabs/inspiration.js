import React from 'react'
import './inspiration.css'
import Inspiration from './inspiration2'
function inspiration() {
  return (
    <div style={{marginTop:'100px',marginLeft:"150px"}}>
		<div>
			<h2 style={{fontFamily:"cursive",textAlign:"center",marginLeft:"-150px"}}>Tips for Managing Time Effectively</h2>
			<p  style={{marginLeft:"-40px",fontFamily:"cursive", fontSize:"25px",marginTop:"30px",marginBottom:"50px"}}> Being conscious of time will result in self-improvement and goal achievement. That's true in both  <span style={{marginLeft:"30px"}}>your work and personal life.What's the best way to manage time effectively? Applying these <span style={{marginLeft:"340px"}}>tips is a good start</span> </span></p>
		</div>
      <div class="container3">
	<div class="cards">
		<div class="card">
			<h2>Plan Ahead</h2>
			<p>
			Planning ahead is a critical part of time management. Ideally, you should plan ahead for the week or at least the day before. 
			
			</p>
			<div class="number">
				<h4 style={{fontSize:'.5px'}}>.</h4>
			</div>
		</div>
	</div>

	<div class="cards">
		<div class="card">
			<h5 style={{marginLeft:"20px",textAlign:"center",fontWeight:"bold",marginTop:"10px",fontFamily:"cursive"}}>Make Some Changes in Your Schedule</h5>
			<p>
			If you feel more energised at certain times of the day, change your schedule to embrace that.
			</p>
			<div class="number">
				<h4 style={{fontSize:'.5px'}}>.</h4>
			</div>
		</div>
	</div>

	<div class="cards">
		<div class="card">
			<h5 style={{marginLeft:"20px",textAlign:"center",fontWeight:"bold",marginTop:"10px",fontFamily:"cursive"}}>Find out Where You're Wasting Time</h5>
			<p>
	
			Many of us are prey to time-wasters that steal time we could be using much more 
			</p>
			<div class="number">
				<h4 style={{fontSize:'.5px'}}>.</h4>
			</div>
		</div>
	</div>
</div>
      <div>
        <Inspiration/>
      </div>

    </div>
  )
}

export default inspiration
