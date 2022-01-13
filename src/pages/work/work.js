import { Col, Container, Row } from 'react-bootstrap';
import './work.scss';
import linlitalk from '../../images/linlitalk.png';
import cinemont from '../../images/cinemont2.png';
import dashboard from '../../images/dashboard.png';
import onlinepoker from '../../images/online-poker3.png';
import onlinepoker2 from '../../images/online-poker.png';
import pocketcity from '../../images/pocket-city.png';
import { useEffect, useState } from 'react';
import { projects } from './projects';

const Work = () => {

    const [ selected, setSelected ] = useState("all");

    useEffect(()=>{
        let projects = document.getElementsByTagName("SPAN")

        for (let i=0;i<projects.length;i++){
            projects[i].classList.remove("work-selected")
        }
        document.getElementById(selected).classList.add("work-selected");
    },[selected])

    return (
        <Container id='work-container'>
            <Row>
                <Col>
                    <p>
                        <span id={"all"} onClick={()=>setSelected("all")}>All</span> /
                        <span id={"ui/ux"} onClick={()=>setSelected("ui/ux")}> UI&UX</span> / 
                        <span id={"frontend"} onClick={()=>setSelected("frontend")}> Frontend</span> / 
                        <span id={"backend"} onClick={()=>setSelected("backend")}> Backend</span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='projects'>
                    {projects.map(project=>(
                        <div className='project'>
                            <img alt='online poker' src={project.images[0]}/>
                            <div className='content'>
                                <h2>{project.name}</h2>
                                <p>{project.tools}</p>  
                            </div>
                            <button>Learn more</button>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
export default Work;