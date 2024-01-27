import React from 'react'
import { Container, Col, Row, Card, ProgressBar, Button, CardImg } from 'react-bootstrap'
import styles from "../styles/Home.module.css"
import { PiHandCoinsThin, PiBaby } from "react-icons/pi";
import { TbHeartHandshake } from "react-icons/tb";
import { BsQuora, BsXbox, BsTwitterX, BsBing, BsPersonCircle, BsMortarboardFill, BsDash, BsDashLg, BsHeartPulseFill, BsHeartPulse } from 'react-icons/bs';
import GoogleMapp from './GoogleMapp';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


const HeroSection = () => {
    
  return (
    <Container fluid className='px-0'>

        <div   className={styles.redDiv}>
        <Card className="bg-dark text-white border-light rounded-0">
      <Card.Img src="./assets/children_1.jpeg" alt="Children image" className={styles.img_children} />
      <Card.ImgOverlay>
        <TrackVisibility>
        {({ isVisible }) => (
        <div className={isVisible ? `${styles.kind} animate__animated animate__fadeInDown` : ''}>
        <Card.Title className={styles.join}>Join Us in <br/> Making a <br/> Difference</Card.Title>
        <Card.Text className={styles.changing}>
          Changing Lives, One Act of Kindness at a Time
        </Card.Text>
        <Button variant='warning'className='text-white fw-bold rounded-pill px-4'>Donate</Button>
        </div>
         )}
        </TrackVisibility>
      </Card.ImgOverlay>
    </Card>

        </div>
        

       <Container className='text-center'>
       <h4 className='fw-bold pt-4'>Our Mission is Succinctly Captured in<br/> Three Pillars</h4>
       </Container>

       <Container className='pb-5'>
        <TrackVisibility>
        {({ isVisible }) => (

        <Row xs={1} md={2} lg={3}>
            <Col className={styles.col_fund}>
            <div className={styles.circle}>
                <img src='./assets/coin.png' alt='coin' height="25px" />
            </div>
            <h6 className='fw-bold'>
                WE FUND
            </h6>
            <p className={isVisible ? ' animate__animated animate__slideInLeft' : ''}>
                Through strategic funding, we catalyze positive change
                in underserved communities, ensuring that essential resources
                reach those who need them most.
            </p>
            </Col>

            <Col className={styles.col_fund}>
            <div className={`${styles.circle} bg-success`}>
            <PiHandCoinsThin size={30} color='orange'/>
            </div>
            <h6 className='fw-bold'>
                WE PROVIDE CARE
            </h6>
            <p className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                We provide care-compassionate support for health well-being, and community development.
            </p>
            </Col>

            <Col className={styles.col_fund}>
            <div className={`${styles.circle} bg-primary`}>
            <TbHeartHandshake size={30} color='green'/>
            </div>
            <h6 className='fw-bold'>
                WE EMPOWER
            </h6>
            <p className={isVisible ? 'animate__animated animate__slideInRight' : ''}>
                We empower individuals through education,
                 skills development, and sustainable 
                 initiatives, fastering self-reliance 
                 and resilience.
            </p>
            </Col>
        </Row>
         )}
        </TrackVisibility>
       </Container>

       <Container className='pt-5'>
        <TrackVisibility>
        {({ isVisible }) => (
        <Row xs={1} md={2} lg={2} className='gap-5'>
            <Col lg={4} className={isVisible ? 'animate__animated animate__slideInLeft animate__slower' : '' }>
            <Card >
            <img src='./assets/child.webp' alt='chid' />
            </Card>
            </Col>

            <Col lg={7} className={isVisible ? 'animate__animated animate__slideInRight animate__slower' : ''}>

            <h4 className='fw-bold'>
                Our Goals
            </h4>
            <p className='text-success fw-bold fs-4'>
                Join us in making a meaningful and sustainable difference
            </p>

            <p className={styles.goals}>
                To create an inclusive environment where everyone can thrive,
                foster growth and well-being, and contribute to the betterment of society.
                To create an inclusive environment where everyone can thrive,
                foster growth and well-being, and contribute to the betterment of society.
                To create an inclusive environment where everyone can thrive,
                foster growth and well-being, and contribute to the betterment of society.
                To create an inclusive environment where everyone can thrive,
                foster growth and well-being, and contribute to the betterment of society.
                To create an inclusive environment where everyone can thrive,
                foster growth and well-being, and contribute to the betterment of society.

            </p>
            <div className='py-5 d-flex gap-5'>
                <Button variant='warning' className='rounded-pill px-5 text-white fw-bold'>Donate</Button>
                <img src='./assets/youtube.svg.png' alt='youtube' height="35px"/>
            </div>
            </Col>
        </Row>
         )}
        </TrackVisibility>
       </Container>

        <Container fluid  className={styles.reach}>
       <Container>

        <h3 className='fw-bold py-5'>
            Our Outreach
        </h3>
        <Row xs={1} lg={3} className='row-gap-4'>
            <Col>
            <Card className='bg-transparent border-0'>
      <Card.Img variant="top" src="./assets/children_1.webp" alt='children'/>
      <Card.Body>
        <Card.Title className='fw-bold pb-3'>Enhancing Health and Well-being</Card.Title>
        <Card.Text className='pb-3'>
          Through targeted initiatives, including scholarships and resource allocation, we actively 
          work to bridge educational gaps.
        </Card.Text>
        <div className={`${styles.donate} p-3 `}>
        <ProgressBar now={30} variant='warning '/>
            <div className=' d-flex justify-content-between pt-1'>
            <div>
                <h6>Donations</h6>
                <p>$2760</p>
            </div>
            <div>
                <h6>Target</h6>
                <p>$10,000</p>
            </div>
            </div>
            
        </div>
        
      </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className='bg-transparent border-0'>
      <Card.Img variant="top" src="./assets/children_2.jpeg" alt='children'/>
      <Card.Body>
        <Card.Title className='fw-bold pb-3'>Enhancing Health and Well-being</Card.Title>
        <Card.Text className='pb-3'>
          Through targeted initiatives, including scholarships and resource allocation, we actively 
          work to bridge educational gaps.
        </Card.Text>
        
        <div className={`${styles.donate} p-3 `}>
        <ProgressBar now={80} variant='warning '/>
            <div className=' d-flex justify-content-between pt-1'>
            <div>
                <h6>Donations</h6>
                <p>$7890</p>
            </div>
            <div>
                <h6>Target</h6>
                <p>$10,000</p>
            </div>
            </div>
            
        </div>
      </Card.Body>
         </Card>
            </Col>

            <Col>
            <Card className='bg-transparent border-0'>
      <Card.Img variant="top" src="./assets/children_3.jpeg" alt='children'/>
      <Card.Body>
        <Card.Title className='fw-bold pb-3'>Enhancing Health and Well-being</Card.Title>
        <Card.Text className='pb-3'>
          Through targeted initiatives, including scholarships and resource allocation, we actively 
          work to bridge educational gaps.
        </Card.Text>

        <div className={`${styles.donate} p-3 `}>
        <ProgressBar now={45} variant='warning '/>
            <div className=' d-flex justify-content-between pt-1'>
            <div>
                <h6>Donations</h6>
                <p>$4790</p>
            </div>
            <div>
                <h6>Target</h6>
                <p>$10,000</p>
            </div>
            </div>
            
        </div>
        
      </Card.Body>
             </Card>
            </Col>
        </Row>
       </Container>

       <Container className='mt-5'>
        <TrackVisibility>   
        {({ isVisible }) => (
        <Row xs={1} md={1} lg={2} className='pt-5 row-gap-3'>
            <Col className={isVisible ? 'animate__animated animate__slideInLeft ' : ''}>
            <Card className="bg-dark text-white border-0">
      <Card.Img src="./assets/children_4.jpeg" alt="Card image" className='opacity-25' />
      <Card.ImgOverlay className='p-5'>
        <Card.Title>Advancing Women's <br/> Right: </Card.Title>
        <Card.Text>
         Through our advocacy efforts.
         <br/> we work tirelessly to uphold the <br/>
         rights and overall well-being of<br/>
         women on a global scale.

        </Card.Text>
        <Button variant='danger' className='rounded-pill px-5'>Donate</Button>
      </Card.ImgOverlay>
            </Card>
            </Col>
            
            <Col className={isVisible ? 'animate__animated animate__slideInRight ' : ''}>
            <Card className="bg-dark text-white border-0">
      <Card.Img src="./assets/children_5.jpeg" alt="Card image" className='opacity-25' />
      <Card.ImgOverlay className='p-5'>
        <Card.Title>Advancing Women's <br/> Right: </Card.Title>
        <Card.Text>
         Through our advocacy efforts.
         <br/> we work tirelessly to uphold the <br/>
         rights and overall well-being of<br/>
         women on a global scale.

        </Card.Text>
        <Button variant='danger' className='rounded-pill px-5'>Donate</Button>
      </Card.ImgOverlay>
    </Card>
            </Col>
           
        </Row>
        )}
        </TrackVisibility>
       </Container>

       <Container className='d-flex justify-content-between p-5'>
        <BsTwitterX size={40} color='gray'/>
       <BsXbox size={40} color='gray'/>
      <BsBing size={40} color='gray'/>
        <BsQuora size={40} color='gray'/>
    
       </Container>
       </Container>

       <Container fluid className={styles.team}>
        <Container className='text-center'>
            <h6 className='py-5 fw-bold'>
                Meet The Team
            </h6>

            <div className='d-flex justify-content-center gap-4 py-4' >
                <img src='./assets/woman_1.jpeg' alt='woman' className={styles.team_img}/>
                <img src='./assets/man_1.webp' alt='man' className={styles.team_img}/>
                <img src='./assets/woman_2.jpeg' alt='woman' className={styles.team_img}/>
                <img src='./assets/man_2.jpeg' alt='man' className={styles.team_img}/>
            </div>

            <p className='py-4'>
                Our dedicated team is the driving force behind our impactful <br/>
                initiatives and unwavering commitment to positive change. Get <br/>
                to know the faces behind our mission.
            </p>
        </Container>
        <Container fluid className={styles.force}>
      
      <div className={styles.red}>
         <img src='./assets/children_6.jpeg' alt='children' className={styles.child}/>
      </div>
      <div className={styles.red}>
          <img src='./assets/children_7.jpeg' alt='children' className={styles.child}/>
      </div>
      <div className={styles.red}>
         <img src='./assets/children_8.jpeg' alt='children' className={styles.child}/>
      </div>
      <div className={styles.red}>
         <img src='./assets/children_9.jpeg' alt='children' className={styles.child}/>
      </div>
     
     </Container>
       </Container>

      <Container fluid className='p-0 position-relative'>
            <Card className="bg-dark text-white text-center border-0 rounded-0 h-100" style={{height: "10rem"}}>
            <Card.Img src="./assets/children_7.jpeg" alt="Children" style={{height: "250px", objectFit: "cover", opacity: "0.15"}} />
            <Card.ImgOverlay>
                <Card.Title className='fw-bold pt-5'>Join Us in Making a Difference</Card.Title>
                <Button variant='warning' className='rounded-pill mt-4 px-5 fw-bold text-white'>Donate</Button>
            </Card.ImgOverlay>
            </Card>

        <TrackVisibility>
        {({ isVisible }) => (
        <Container className= 'd-flex justify-content-center position-absolute top-100 start-50 translate-middle' >
                <Card style={{width: "30rem"}}  className={isVisible ? 'animate__animated animate__tada shadow-lg' : ''}>
                    <Card.Body>
                        <Row >
                            <Col className='text-center'>
                            <BsPersonCircle size={30} color='orange' />
                        <div className={styles.spons}>
                        <p className='fw-bold fs-2'>6578</p>
                            <p>Sponsors</p>
                        </div>
                            </Col>

                            <Col className='text-center'>
                            <BsMortarboardFill size={30} color='green' />
                        <div className={styles.spons}>
                        <p className='fw-bold fs-2'>4650</p>
                            <p>Scholarships</p>
                        </div>
                            </Col>

                            <Col className='text-center'>
                            <PiBaby size={30} color='lime' />
                        <div className={styles.spons}>
                        <p className='fw-bold fs-2'>3990</p>
                            <p>Our Kids</p>
                        </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
       </Container>
        )}
       </TrackVisibility>
      </Container>

      <Container className={styles.app}>    
        <Row>
            <Col>
                <p className=' bg-warning text-center py-3 fw-bold text-white border rounded'>Our Approach</p>
            </Col>
            <Col>
            <p className=' bg-secondary text-center py-3 fw-bold text-black border rounded'>Our Vision</p>
            </Col>
            <Col className='position-relative'>
            <p className=' bg-secondary text-center py-3 fw-bold text-black border rounded'>Our Mission</p>
            <span class="position-absolute top-0 start-100 translate-middle badge p-2 border border-light rounded-circle bg-warning text-dark">
<BsDashLg size={20}/>
  </span>



            </Col>
        </Row>
      </Container>

      <Container className={`${styles.target} position-relative`} > 
      <TrackVisibility>
      {({isVisible}) =>(

     
        <Row className='py-5'>
           
            <Col xs={12} lg={6} className={isVisible ? 'animate__animated animate__slideInLeft' : ''}>
                <div className='d-flex gap-4'>
                    <div className='bg-success h-100 p-2 border rounded-circle' >
                    <BsHeartPulseFill size={25} color='violet' />
                    </div>
                  <div>
                  <h6 className='fw-bold'>
                        Holistic Empowerment:
                    </h6>
                    <p>
                        We believe in the power of nature and its elements to heal, nurture,
                        and empower individuals at all stages of life. Our mission is to provide a safe space
                        where people can connect with nature, learn about themselves through immersive experiential learning
                        habits, and foster resilience within their communities.
                        
                    </p>
                  </div>
                </div>

                <div className='d-flex gap-4'>
                    <div className='bg-info h-100 p-2 border rounded-circle' >
                    <BsHeartPulse size={25} color='green' />
                    </div>
                  <div>
                  <h6 className='fw-bold'>
                        Holistic Empowerment:
                    </h6>
                    <p>
                        We believe in the power of nature and its elements to heal, nurture,
                        and empower individuals at all stages of life. Our mission is to provide a safe space
                        where people can connect with nature, learn about themselves through immersive experiential learning
                        
                    </p>
                  </div>
                </div>
            </Col>

            <Col xs={12} lg={6} className={isVisible ? 'animate__animated animate__slideInRight' : ''}>
                <Card  >
                    <Card.Img variant="top" src="./assets/money.webp" style={{height: "300px", objectFit: "cover"}}/>
            
                </Card>
            </Col>
        </Row>
         )}
        </TrackVisibility>

        <Container className='z-3 position-absolute top-100 start-50 translate-middle'>
        <TrackVisibility>
        {({isVisible}) => (

        
        <Row className={isVisible ? "animate__animated animate__bounce shadow-lg justify-content-center mt-3 " : ''}>
            <Col className=" py-4 text-center text-white bg-danger border border-end-0 rounded-start">
                <h6 className='fw-bold'>
                    Our Communities Projects
                </h6>
                <p>
                    See how we are making a difference 
                    in our community projects!
                    See how we are making a difference 
                    in our community projects!
                
                </p>
            </Col>
            <Col className=" py-4 text-center text-white bg-warning border border-start-0 rounded-end">
                <h6 className='fw-bold'>
                    Our Communities Targets
                </h6>
                <p>
                    See how we are making a difference 
                    in our community projects!
                    See how we are making a difference 
                    in our community projects!
                
                </p>
            </Col>
        </Row>
        )}
        </TrackVisibility>
      </Container>
      </Container>

      <Container fluid className='p-0'>
        <GoogleMapp/>
      </Container>

      
      
    </Container>
  )
}
export default HeroSection