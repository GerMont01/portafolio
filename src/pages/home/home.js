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
                document.getElementById("introCol").style.opacity = "1"; 
            }
        } 
    },[])
    

    return (
        <>
        <Container id='homeContainer'>
            <Row id='meRow'>
                <Col id='meCol'>
                    <img src='https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.jpg' alt='me'/>
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
                <Col id="introCol">
                    <h1>How It Started</h1>
                    <p>I graduated from the University of the Americas Puebla (UDLAP) with a bachelor's degree in Electronics Engineering in 2019. And since the beginning of my studies, I have been challenged to solve different problems in different fields of technology. I learned many programming languages such as C, C++, C# and Python in addition to embedded systems programing; microcontrollers, PLCs, and FPGAs. Which has given me a very strong desire to live and grow as a programmer; always looking to learn new ways of coding, solving real-world problems, and developing new technologies.</p>
                    <h1>What I do now</h1>
                    <p>I am currently studying at Cornerstone International Community College of Canada and I had the opportunity to learn many tools such as HTML, CSS, SASS, Javascript, JQuery, Git and React, NodeJs and Express; creating many projects and always looking to innovate and find new ways of doing things.</p>
                </Col>
            </Row>
        </Container>
        <MdOutlineKeyboardArrowDown id="arrowDown"/>
        </>
    );
}
export default Home;