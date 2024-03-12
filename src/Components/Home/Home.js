import React from 'react'
import {Container,Row,Col} from 'reactstrap'
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
          <center style={{width:230,marginTop:-15}}><p style={{color:'rgb(0, 81, 129)',fontSize:17,textDecoration:'underline',cursor:'pointer'}}> BIPP ISB</p></center>
            </div>
        </Col>
       
        <Col md="8" className='col2'>
          <h6 className='nameHead'>Hi, I'm Nitesh.</h6>
          {/* <br></br> */}
          <p className='info'>
          I am an engineer deeply passionated about technology and driven by innovation.
           I am currently working at  IOFE BIPP, an initiative on the forest economy where our focus lies on leveraging technology to revolutionize the forest economy. Within this initiative, 
           I serve as a full-stack developer, specializing in tackling complex challenges ranging from software development to cutting-edge deep learning problems.
          </p>
          <p className='info'>
          I recently graduated from IIT Delhi with an undergraduate in Production and Industrial Engineering. Throughout college, 
          I worked with several clubs and had diverse responsibilities as the publicity team head and technical coordinator.
        </p>
        <p className='info'>
        During college, I undertook internships with startups spanning diverse fields, 
        ranging from the education sector to autonomous drones. I served as a full-stack developer, significantly enhancing my expertise and capabilities.
          </p>
          <p className='info'>
          You can find my full CV here.
          </p>
        </Col>
       </Row>
    </Container>
  )
}

export default Home