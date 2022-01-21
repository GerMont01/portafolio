import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Col, Container, Row } from 'react-bootstrap';
import './home.scss';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        window.onscroll = () => {
            if (document.getElementById("arrowDown")) {
                document.getElementById("arrowDown").style.opacity = "0";
                document.getElementById("introCol1").style.opacity = "1"; 
                document.getElementById("introCol2").style.opacity = "1"; 
            }
        } 
    },[])
    

    return (
        <>
        <Container id='homeContainer'>
            <Row id='meRow'>
                <Col id='meCol'>
                    <img src={require('../../images/me.jpeg')} alt='me'/>
                    <p>Hi, I am <span>Gerardo Montero</span>, a Fullstack Developer and Electronics Engineer based in Vancouver, BC.</p>
                </Col>
            </Row>
            <Row id="socialMediaRow">
                <Col id="socialMediaCol">
                        <FaFacebookSquare />
                        <FaLinkedin />
                        <FaGithubSquare />
                </Col>
            </Row>
            <Row id="introRow">
                <Col xs={12} md={6} id="introCol1">
                    <h1>How I Started</h1>
                    <p>I graduated from the University of the Americas Puebla (UDLAP) with a bachelor's degree in Electronics Engineering in 2019. Where I learned about embedded systems programming: microcontrollers, PLCs, and FPGAs. Since then I've had a very strong desire to live and grow as a programmer; always looking to learn new ways of coding, solving real-world problems, and developing new technologies.</p>
                </Col>
                <Col xs={12} md={6}id="introCol2">
                    <h1>What I do now</h1>
                    <p>I migrated to Canada, where I took a diploma at Cornerstone International Community College of Canada in Web Development and had the opportunity to learn many tools such as HTML, CSS, SASS, Javascript, React, NodeJs, Express and Git. And now I am looking to create many projects, keep learning new technologies, innovate and find new ways of doing things.</p>
                </Col>
            </Row>
        </Container>
        <MdOutlineKeyboardArrowDown id="arrowDown"/>
        </>
    );
}
export default Home;