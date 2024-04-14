import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import './Home.css'

function Home() {
  return (
    <Container className='mainContainer'>
       <Row>
        <Col md="4" className='col1'>
            <div>

          <img src="./myself.jpg" alt='Nitesh Saini' className='Img'/>
          <center style={{width:230,marginTop:10}}><p className='name'> Nitesh Saini</p></center>
          <center style={{width:230,marginTop:-15}}><p style={{color:'grey',fontSize:17}}> Full Stack Developer</p></center>
          <center style={{width:230,marginTop:-15}}><a href='https://www.linkedin.com/company/bharti-institute-of-public-policy-isb/mycompany/' target='_blank'><p style={{color:'rgb(19 114 171)' ,fontSize:17,textDecoration:'underline',cursor:'pointer'}}> BIPP ISB</p></a></center>
            <center>
            <div>
              <a href='mailto:niteshsaini5112001@gmail.com'>
              <FontAwesome
           className="super-crazy-colors"
           name="fa-brands fa-envelope"
  
           style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'rgb(19 114 171)' ,marginRight:15,fontSize:22  }}
             />
              </a>
              <a href='https://www.linkedin.com/in/nitesh-saini-80893b1a0' target='_blank'>

            <FontAwesome
        className="super-crazy-colors"
        name="fa-brands fa-linkedin"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'rgb(19 114 171)' ,marginRight:15,fontSize:22  }}
          />
              </a>
              <a href='https://github.com/nitesh047' target='_blank'>

           <FontAwesome
        className="super-crazy-colors"
        name="fa-brands fa-github"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'rgb(19 114 171)' ,marginRight:15,fontSize:22  }}
        />
        </a>
        <a href='https://leetcode.com/nitesh047/' target='_blank'>
          
            <FontAwesome
        className="super-crazy-colors"
        name="fa-brands fa-code"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'rgb(19 114 171)' ,marginRight:15,fontSize:22  }}
        />
        </a>

            <FontAwesome
        className="super-crazy-colors"
        name="fa-brands fa-file"
    
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'rgb(19 114 171)' ,marginRight:15,fontSize:22 }}
          />
            </div>

            </center>
            </div>
            <br></br>
        </Col>
        <Col md="8" className='col2'>
          <h6 className='nameHead'>Hi, I'm Nitesh.</h6>
          {/* <br></br> */}
          <p className='info'>
          I am an engineer driven by a strong passion for technology and innovation.  I am currently working with IoFE at the Bharti Institute of Public Policy in the Indian School of Business. Within this initiative, I serve as a full-stack developer, specializing in tackling complex challenges ranging from software development to cutting-edge deep learning problems.
           My work contributes to the project's broader goal of leveraging technology to revolutionize the forest economy in India.
          </p>
          <p className='info'>
          I recently graduated from IIT Delhi with a B.Tech in Production and Industrial Engineering. During my time in college, I undertook internships with startups spanning diverse fields, 
          including the education sector and autonomous drones. I also served as the head of publicity teams and the technical coordinator for several college clubs.
        </p>
        <p className='info'>
        {/* During college, I undertook internships with startups spanning diverse fields, 
        ranging from the education sector to autonomous drones. I served as a full-stack developer, significantly enhancing my expertise and capabilities. */}
          </p>
          <p className='info'>
          You can find my full CV <a style={{color:'rgb(19 114 171)'}} href='#'>here.</a>
          </p>
          <br>
          </br>
         
          <div className='desktopView'>
          <h6 className='workHead'>Recent Work Experience</h6>

            <a style={{textDecoration:'none',color:'black'}} href='https://www.linkedin.com/company/bharti-institute-of-public-policy-isb/mycompany/' target='_blank'>
          <div style={{display:'flex',marginTop:40}}>
            <img src='./Bipp_Logo.jpg' className='bippLogo'/>
            <div className='details'>
              <p className='job1'>Full Stack Developer, June 2023 - Present</p>
              <p className='job2'>Hyderabad , India</p>
            </div>
          </div>
            </a>
            <a style={{textDecoration:'none',color:'black'}} href='https://www.linkedin.com/company/vecros/' target='_blank'>
              
          <div style={{display:'flex',marginTop:35}}>
            <img src='./vecros_logo.png' className='vecrosLogo'/>
            <div  className='details'>
              <p className='job1'>Software Developer Intern, May 2022 - July 2022</p>
              <p className='job2'>New Delhi , India</p>
            </div>
          </div>
            </a>
          <br>
          </br>
          <h6 className='workHead'>Education</h6>
          <a style={{textDecoration:'none',color:'black'}} href='https://www.linkedin.com/school/iitdelhi' target='_blank'>
              
              <div style={{display:'flex',marginTop:35,alignItems:'center'}}>
                <div className='iit'>
                <img src='https://isme.iitd.ac.in/images/iitlogo.png' className='iitLogo'/> 
                </div>
                <div className='detailsIIT'>
                  <p className='job1'>BTech, Mechanical Engineering , 2019 -  2023</p>
                  <p className='job2'>Indian Institute  of Technology, Delhi</p>
                </div>
              </div>
                </a>
          </div>
          
        </Col>
       </Row>
    </Container>
  )
}

export default Home