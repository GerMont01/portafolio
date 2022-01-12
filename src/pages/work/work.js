import { Col, Container, Row } from 'react-bootstrap';
import './work.scss';
import linlitalk from '../../images/linlitalk.png';
import cinemont from '../../images/cinemont2.png';
import dashboard from '../../images/dashboard.png';
import onlinepoker from '../../images/online-poker3.png';
import onlinepoker2 from '../../images/online-poker.png';
import pocketcity from '../../images/pocket-city.png';
import { useEffect, useState } from 'react';

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
                    <div className='project'>
                        <img alt='online poker' src={onlinepoker}/>
                        <div className='content'>
                            <h2>Online Poker</h2>
                            <p>ReactJS/ExpressJS/Typescript</p>  
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className='project'>
                        <img alt='pocket city' src={pocketcity}/>
                        <div className='content'>
                            <h2>Pocket City</h2>
                            <p>ReactJS</p>  
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className='project'>
                        <img alt='dashboard' src={dashboard}/>
                        <div className='content'>
                            <h2>System Analyzer</h2>
                            <p>ReactJS/ExpressJS</p>  
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className='project'>
                        <img alt='cinemont' src={cinemont}/>
                        <div className='content'>
                            <h2>Cinemont</h2>
                            <p>jQuery/Javascript/SASS</p>  
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className='project'>
                        <img alt='linlitalk' src={linlitalk} />
                        <div className='content'>
                            <h2>Linlitalk</h2>
                            <p>NodeJS</p>  
                        </div>
                        <button>Learn more</button>
                    </div>
                    <div className='project'>
                        <img alt='other' src={onlinepoker2}/>
                        <div className='content'>
                            <h2>Online Poker</h2>
                            <p>React/Express/Typescript</p>  
                        </div>
                        <button>Learn more</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Work;