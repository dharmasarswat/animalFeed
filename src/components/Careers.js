import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { vacancies } from "../assets/vacancies"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"

export const Career = () => {
    return (
        <Container>
            <Row>
                <h1 style={{ fontSize: '48px', color: 'var(--primary-color)', fontWeight: '700' }} className='my-4 text-center col-md-12'>Our vacancies</h1>
            </Row>
            <Row>
                { vacancies.map((data, index) => {
                    return (
                        <Col md={12} className='border-1 rounded my-2 py-4 px-2 bg-light' key={index}>
                            <Col md={12} className='justify-content-between'>
                                <Row className='mb-2'>
                                    <Col md={6} style={{ fontSize: '22px', color: 'var(--primary-color)' }}>{data.post}</Col>
                                    <Col md={6} style={{ fontSize: '16px' }} className="text-muted text-right">{data.postedOn}</Col>
                                </Row>
                                <Row className='mb-2 pl-3'>
                                    { data.tags.map(( tag, idx ) => {
                                        return (<span key={index+''+idx} className='text-light mr-3 mb-2 px-2 rounded' style={{ backgroundColor: 'gray' }} >{tag}</span>)
                                    }) }
                                </Row>
                                {data.desc?.length > 0 && 
                                    <Row className='mb-2 mt-4 text-black-50'>
                                        <Col md={12}>{ data.desc.substring(0, 400) }...</Col>
                                    </Row>
                                }
                            </Col>
                            <Col><Link to={'/careers/'+data.post.replace(/ /g, '_')+'/'+data.id} ><Button variant='outline-info' className='btn-sm my-3' >View job opeaning</Button></Link></Col>
                        </Col>
                    )
                }) }
            </Row>
        </Container>
    )
}