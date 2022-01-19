import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.scss';

const About = () => {

    const windowHeight = window.innerHeight/2;

    useEffect(()=>{
        const elements = document.getElementsByClassName('experience')
        if (elements) checkPosition(elements);
        window.onscroll = () => {
            if (elements) checkPosition(elements);
        }
    },[])

    const checkPosition = (elements) => {
        for (let element of elements) {
            let positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= -5 && positionFromTop - windowHeight > -200) {
                element.classList.add('showexperience');
            } else {
                element.classList.remove('showexperience');
            }
        }
    }


    return (
        <Container id='aboutContainer'>
            <Row id='aboutRow'>
                <Col className='skillsRow' xs={12} md={3}>
                    <div>
                        <h1>My Skills</h1>
                        <h1>My Interests</h1>
                    </div>
                </Col>
                <Col xs={1} md={1}>
                    <div className='sliders'>
                        <div className='slider1'></div>
                        <div className='slider2'></div> 
                    </div>
                </Col>
                <Col className='timelineCol' xs={11} md={8}>
                    <h1>My Timeline</h1>
                    <div className='timelineElements'>
                        <div className='experience'>
                            <img alt='webmainland' src={require('../../images/webmainland.jpeg')}/>
                            <div>
                                <h3>Backend Developer</h3>
                                <h4>Webmainland</h4>
                                <h5>Sep 2021 - Dec 2021</h5>
                                <h5>Vancouver, British Columbia, Canada</h5>
                                <p>Developed the backend for the app Linlitalk, setting up video meetings based on personal interest and location and sending emails to users with meeting link. Developed using Express with Google API, Zoom API and Nodemailer with OAuth 2.0.</p>
                            </div>
                        </div>
                        <div className='experience'>
                            <img alt='ciccc' src={require('../../images/ciccc.png')}/>
                            <div>
                                <h3>Co-op Diploma Student</h3>
                                <h4>Cornerstone International Community College of Canada</h4>
                                <h5>Jan 2021 - Dec 2021</h5>
                                <h5>Vancouver, British Columbia, Canada</h5>
                            </div>
                        </div>
                        <div className='experience'>
                            <img alt='clv' src={require('../../images/clv.jpeg')}/>
                            <div>
                                <h3>Service Engineer</h3>
                                <h4>Centro Logistico Vital CLV</h4>
                                <h5>Feb 2020 - Dec 2020</h5>
                                <h5>Puebla, Mexico</h5>
                                <p>Carried out successful diagnosis and repairs to leading dental lab equipment in the market, such as Renfert, VITA, Dekema, and Amann Girbach. Gave technical support to clients and calibrated dental CNCs from AmannGirrbach worth up to 150,000 USD. Assisted and trained clients to successfully print 3D objects with LCDPrinters</p>
                            </div>
                        </div>
                        <div className='experience'>
                            <img alt='epsol' src={require('../../images/epsol.jpeg')}/>
                            <div>
                                <h3>Project Engineer</h3>
                                <h4>EPSOL</h4>
                                <h5>May 2019 - Feb 2020</h5>
                                <h5>Puebla, Mexico</h5>
                                <p>Modeled electrical systems in ETAP for studies such as short circuits, power flows, coordination of protections, and electric arc. Created electrical network blueprints in AutoCAD. Prepared reports for the clients.</p>
                            </div>
                        </div>
                        <div className='experience'>
                            <img alt='usec' src={require('../../images/udec.png')}/>
                            <div>
                                <h3>Research Intern</h3>
                                <h4>Universidad de Concepcion</h4>
                                <h5>Aug 2019 - Dec 2019</h5>
                                <h5>Concepcion, Biobio, Chile</h5>
                                <p>Developed a proposal to the university for the implementation of a photovoltaic and energy management system on the Concepcion campus. Presented the proposal at the international seminar "I Seminario Internacional de Electromovilidad -Ciudades Inteligentes - Cambio Climático".</p>                      
                            </div>
                        </div>
                        <div className='experience'>
                            <img alt='udlap' src={require('../../images/udlap.png')}/>
                            <div>
                                <h3>Bachelor's Degree in Electronics Engineering</h3>
                                <h4>Universidad de las Americas Puebla</h4>
                                <h5>2015 - 2019</h5>
                                <h5>Puebla, Mexico</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default About;