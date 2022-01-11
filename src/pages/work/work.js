import { Col, Container, Row } from 'react-bootstrap';
import './work.scss';

const Work = () => {
    return (
        <Container id='work-container'>
            <Row className='projects'>
                <Col className='project'>
                    <img alt='Linlitalk' src='#'/>
                </Col>
                <Col className='project'>
                    <img alt='dashboard' src='#'/>
                </Col>
            </Row>
            <Row className='projects'>
                <Col className='project'>
                    <img alt='pocket city' src='#'/>
                </Col>
                <Col className='project'>
                    <img alt='cinemont' src='#'/>
                </Col>
            </Row>
            <Row className='projects'>
                <Col className='project'>
                    <img alt='online poker' src='#'/>
                </Col>
                <Col className='project'>
                    <img alt='other' src='#'/>
                </Col>
            </Row>
        </Container>
    );
}
export default Work;