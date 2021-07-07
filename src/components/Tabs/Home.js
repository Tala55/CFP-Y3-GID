import React from "react";
import "./Home.css";
import GetitDone from "../Get-it-Done";

function Home() {
  return (
    <div>
      <GetitDone />
      <div>
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "55px",
              fontSize: "55px",
              color:"#2c3964"
            }}
          >
            What is Get It Done!
          </h2>
          <div
            style={{
              marginTop: "20px",
              borderTop: "2px solid #ffd6ba",
              borderBottom: "2px solid #ffd6ba",
              marginBottom: "100px",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                color: "#555b6e",
              }}
            >
              Get It Done is a task-management and organizer app that can help
              you stay on top of everything that needs to get done & You can
              also use the calendar view to get a glance at your week or month
              ahead.{" "}
            </p>
          </div>
        </div>

        <div class="banner-botton clear">
          <div class="mid-content" style={{ display: "flex" }}>
            <div class="video-left left">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SHiSe6-mOiY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div
              class="video-content-right right"
              style={{ marginLeft: "20px" }}
            >
              <h3 style={{color:'#2c3964 '}}>Watch a video on how to use our app</h3>
              <p>
                It’s not just about recording employee hours. It’s about
                understanding employee availability. It’s about hitting project
                deadlines — while staying on budget. It’s knowing you’ll never
                have to update another Excel spreadsheet. It’s about making
                things easy. It’s giving your team the tools they need to do
                their jobs well. And the insights to work more effectively than
                ever before.
              </p>
            </div>
          </div>
        </div>

        <div class="service-section">
          <div class="mid-content">
            <div class="service-title text-center">
              <h2 style={{color:'#2c3964 '}}>Learn more about our application</h2>
              <p>Track time without wasting a second</p>
            </div>
            <div class="services-items clear">
              <div style={{ display: "flex" }}>
                <div class="service-box left">
                  <div class="s-icon">
                    <span>
                      <i class="fa fa-laptop" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="s-content">
                    <h3 style={{color:'#2c3964 '}}>Time Tracking</h3>
                    <p>
                      Accurate and simple time tracking. Task-based estimation
                    </p>
                  </div>
                </div>
                <div class="service-box left">
                  <div class="s-icon">
                    <span>
                      <i class="fa fa-external-link" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="s-content">
                    <h3 style={{color:'#2c3964 '}}>Resource Planning</h3>
                    <p>
                      Accurate and simple time tracking. Task-based estimation
                    </p>
                  </div>
                </div>
                <div class="service-box left">
                  <div class="s-icon">
                    <span>
                      <i class="fa fa-hdd-o" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="s-content">
                    <h3 style={{color:'#2c3964 '}}>Integrations</h3>
                    <p>
                      Accurate and simple time tracking. Task-based estimation
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div class="service-box left">
                  <div class="s-icon">
                    <span>
                      <i class="fa fa-laptop" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div class="s-content">
                    <h3 style={{color:'#2c3964 '}}>Task Management</h3>
                    <p>
                      Accurate and simple time tracking. Task-based estimation
                    </p>
                  </div>
                </div>
                <div class="service-box left">
                  <div class="s-icon">
                    <span>
                      <i class="fa fa-external-link" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="s-content">
                    <h3 style={{color:'#2c3964 '}}>Reporting</h3>
                    <p>
                      Accurate and simple time tracking. Task-based estimation
                    </p>
                  </div>
                </div>
                <div class="service-box left">
                  <div class="s-icon">
                    <span>
                      <i class="fa fa-hdd-o" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div class="s-content">
                    <h3 style={{color:'#2c3964 '}}>Invoicing</h3>
                    <p>
                      Accurate and simple time tracking. Task-based estimation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
