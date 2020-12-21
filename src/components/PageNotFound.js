import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

export const PageNotFound = () => {
    return <Container>
        <Row>
            <Col className='text-center'>
                <img src={process.env.PUBLIC_URL+'/images/pageNotFound.png'} height='auto' width='80%'  alt="Page Not Found"/>
                <h5 style={{ fontSize: '40px', color: 'var(--primary-color)', fontWeight: '700' }}>Page not found</h5>
            </Col>
        </Row>
    </Container>
}