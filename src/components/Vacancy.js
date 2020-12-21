import { vacancies, whatWillYouDo } from "../assets/vacancies"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Container from "react-bootstrap/esm/Container"
import { Fragment } from "react"
import Button from "react-bootstrap/esm/Button"
import { PageNotFound } from "./PageNotFound"

export const Vacancy = () => {
    const id = document.location.pathname.split('/')[3]
    const vacancy = vacancies.find(obj => obj.id == id)
    return vacancy ?  (
        <Container>
            <Col md={12} className='border-1 rounded my-2 py-4 px-2 my-4'>
                <Col md={12} className='justify-content-between'>
                    <Row className='mb-2'>
                        <Col md={6} style={{ fontSize: '26px', color: 'var(--primary-color)' }}>{vacancy.post}</Col>
                        <Col md={6} style={{ fontSize: '16px' }} className="text-muted text-right">{vacancy.postedOn}</Col>
                    </Row>
                    <Row className='mb-2 pl-3'>
                        { vacancy.tags.map(( tag, idx ) => {
                            return (<span key={idx} className='text-light mr-3 mb-2 px-2 rounded' style={{ backgroundColor: 'gray' }} >{tag}</span>)
                        }) }
                    </Row>
                    {vacancy.desc?.length > 0 && 
                        <Row className='mb-2 mt-4 text-black-50'>
                            <Col md={12}>{ vacancy.desc }...</Col>
                        </Row>
                    }
                    <Row>
                        <Col md={12} className='text-black-50 font-weight-bold my-2'>
                            Location: {vacancy.location}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className='text-black font-weight-bold mb-2 mt-4'>
                            What will you do?
                        </Col>
                    </Row>
                    { whatWillYouDo.map((data, index) => (
                        <Fragment key={index}>
                            <Row>
                                <Col md={12} className='text-black font-weight-bold mt-4 mb-2'>
                                    {data.role}
                                </Col>
                                { data.points.map(( point, idx ) => (
                                    <p key={index+''+idx}className='ml-3' >- {point}</p>
                                )) }
                            </Row>
                        </Fragment>
                    )) }
                </Col>
                <Col md={12} className='mx-auto my-4'><Button variant='outline-info'>Apply Now</Button></Col>
            </Col>
        </Container>
    ) : <PageNotFound />
}