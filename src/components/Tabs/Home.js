import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
      <div style={{backgroundColor:"white",padding:'20px 20px',margin:"0px",width:''}}>
            <h2 style={{textAlign:'center',color:"#a80c2b",marginTop:"70px",fontSize:"55px",fontFamily:"cursive",}}>What is Get It Done!</h2>
        <div style={{
            marginTop:"20px",
            borderTop: '1px solid gray',
            borderBottom: '1px solid gray',
            marginBottom:"100px",
            
        }}>
            <p style={{fontFamily:'cursive',textAlign:'center',fontSize:"25px",}}>Get It Done is a task-management and organizer app that can help you stay on top of everything that needs to get done & You can also use the calendar view to get a glance at your week or month ahead. </p>
        </div>
        </div>



        <div class="banner-botton clear" >
        <div class="mid-content" style={{display:"flex",}}>
            <div class="video-left left">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SHiSe6-mOiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
            <div class="video-content-right right" style={{marginLeft:"-30px"}} >
               <h3>Watch a video on how to use our app</h3>
               <p>It’s not just about recording employee hours. It’s about understanding employee availability. It’s about hitting project deadlines — while staying on budget. It’s knowing you’ll never have to update another Excel spreadsheet. It’s about making things easy. It’s giving your team the tools they need to do their jobs well. And the insights to work more effectively than ever before.</p>
            </div>
        </div>
    </div>



        <div class="service-section" >
        <div class="mid-content">
            <div class="service-title text-center">
                <h2>Learn more about our application</h2>
                <p>Track time without wasting a second</p>
            </div>
            <div class="services-items clear" >
        <div style={{display:"flex"}}>
                <div class="service-box left">
                    <div class="s-icon">
                        <span><i class="fa fa-laptop" aria-hidden="true"></i></span>
                    </div>
                    <div class="s-content">
                        <h3>Time Tracking</h3>
                        <p>Accurate and simple time tracking. Task-based estimation</p>
                    </div>
                </div>
                <div class="service-box left">
                    <div class="s-icon">
                        <span><i class="fa fa-external-link" aria-hidden="true"></i></span>
                    </div>
                    <div class="s-content">
                        <h3>Resource Planning</h3>
                        <p>Accurate and simple time tracking. Task-based estimation</p>
                    </div>
                </div>
                <div class="service-box left">
                    <div class="s-icon">
                        <span><i class="fa fa-hdd-o" aria-hidden="true"></i></span>
                    </div>
                    <div class="s-content">
                        <h3>Integrations</h3>
                        <p>Accurate and simple time tracking. Task-based estimation</p>
                    </div>
                </div>
                </div>
                <div style={{display:"flex"}}>
                <div class="service-box left">
              
                    <div class="s-icon">
                        <span><i class="fa fa-laptop" aria-hidden="true"></i></span>
                    </div>
                  
                    <div class="s-content">
                        <h3>Task Management</h3>
                        <p>Accurate and simple time tracking. Task-based estimation</p>
                    </div>
                </div>
                <div class="service-box left">
                    <div class="s-icon">
                        <span><i class="fa fa-external-link" aria-hidden="true"></i></span>
                    </div>
                    <div class="s-content">
                        <h3>Reporting</h3>
                        <p>Accurate and simple time tracking. Task-based estimation</p>
                    </div>
                </div>
                <div class="service-box left">
                    <div class="s-icon">
                        <span><i class="fa fa-hdd-o" aria-hidden="true"></i></span>
                    </div>
                    <div class="s-content">
                        <h3>Invoicing</h3>
                        <p>Accurate and simple time tracking. Task-based estimation</p>
                    </div>
                </div>
                </div>
                </div>
              

            </div>
        </div>
    </div>
    
    )
}

export default Home

