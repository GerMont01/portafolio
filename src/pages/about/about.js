import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './about.scss';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiSass, SiMongodb, SiTypescript } from 'react-icons/si';
import { MdVideogameAsset, MdOutlineAirplanemodeActive, MdFitnessCenter } from 'react-icons/md';

const About = () => {

    const windowHeight = window.innerHeight;

    useEffect(()=>{
        const elements = document.getElementsByClassName('experience')
        let skills = []
        skills.push(...document.getElementsByClassName('iconscontainer'))
        skills.push(...document.getElementsByClassName('embedded'))
        skills.push(...document.getElementsByClassName('interests'))
        skills.push(...document.getElementsByClassName('aboutimg'))
        skills.push(...document.getElementsByTagName('h1'))
        console.log(skills)
        if (elements) checkPosition(elements);
        if (skills) checkPosition2(skills);
        window.onscroll = () => {
            if (elements) checkPosition(elements);
            if (skills) checkPosition2(skills);
        }
    },[])

    const checkPosition = (elements) => {
        for (let element of elements) {
            let positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight/2 <= -5 && positionFromTop - windowHeight/2 > -200) {
                element.classList.add('showexperience');
            } else {
                element.classList.remove('showexperience');
            }
        }
    }
    const checkPosition2 = (elements) => {
        for (let element of elements) {
            let positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fadein');
            } else {
                element.classList.remove('fadein');
            }
        }
    }


    return (
        <Container id='aboutContainer'>
            <Row id='aboutRow'>
                <Col className='skillsCol' xs={12} md={3}>
                    <div className='skills'>
                        <h1>Web</h1>
                        <div className='iconscontainer'>
                            <div className='skill'><SiHtml5 className='skillicon'/><p>HTML/HTML5</p></div>
                            <div className='skill'><SiCss3 className='skillicon'/><p>CSS/CSS3</p></div>
                            <div className='skill'><SiSass className='skillicon'/><p>SASS</p></div>
                            <div className='skill'><SiJavascript className='skillicon'/><p>Javascript</p></div>
                            <div className='skill'><SiTypescript className='skillicon' /><p>Typescript</p></div>
                            <div className='skill'><SiReact className='skillicon'/><p>React JS</p></div>
                            <div className='skill'><SiNodedotjs className='skillicon'/><p>Node JS</p></div>
                            <div className='skill'><SiExpress className='skillicon'/><p>Express JS</p></div>
                            <div className='skill'><SiMongodb className='skillicon'/><p>MongoDB</p></div>
                        </div>
                        <h1>Embedded systems</h1>
                        <ul className='embedded'>
                            <li>Microcontrollers with C</li>
                            <li>PLCs with ladder language</li>
                            <li>FPGAs with Verilog</li>
                            <li>Arduino</li>
                        </ul>
                        <h1>Other Interests</h1>
                        <ul className='interests'>
                            <li><MdVideogameAsset className='interesticon'/> Video Games</li>
                            <li><MdOutlineAirplanemodeActive className='interesticon'/> Travel</li>
                            <li><MdFitnessCenter className='interesticon'/> Fitness</li>
                        </ul>
                        <img className='aboutimg' alt='about1' src={require('../../images/about1.jpg')} />
                        <img className='aboutimg' alt='about2' src={require('../../images/about2.jpg')} />
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