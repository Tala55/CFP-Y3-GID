import React from 'react'
import './signup.css'

export default function login() {
    return (
        <div>
	min-height:800px;
            <div class="login-wrap" style={{minHeight:'600px'}}>
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Login</label>
		
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked/>
					
				</div>
				<div class="group">
					<input type="submit" class="button" value="Login"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
			
			</div>
				</div>
				</div>
			</div>
		</div>
	</div>

        
    )
}
