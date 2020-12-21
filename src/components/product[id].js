import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { products } from "../assets/products"
import Col from "react-bootstrap/esm/Col"
import formatNumber from "../helper/formatNumber"
import Button from "react-bootstrap/esm/Button"
import { PageNotFound } from "./PageNotFound"

export const Product = () => {

    const id = document.location.pathname.split('/')[2]
    const product = products.find(obj => obj.id == id)

    return product ? (
        <Container>
            <Row className='my-4'>
                <Col md={6} className='mx-auto'>
                    <img src={product?.img} alt={product?.name} width='100%' height='auto' className='rounded'/>
                </Col>
                <Col md={6}>
                    <p className='font-weight-bold mb-0' style={{ fontSize:'28px', color: 'var(--primary-color)' }} >{product.name}</p>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-5">{product.companyName}</p>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-5">{product.desc}</p>
                    <h4 className='text-black-50 mb-4'>Details</h4>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Price</Col>
                        <Col sm={6}>₹{formatNumber(product.price)}/{product.packageSize} Kgs</Col>
                    </Row>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Package type</Col>
                        <Col sm={6}>{product.packagetype}</Col>
                    </Row>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Form</Col>
                        <Col sm={6}>{product.form}</Col>
                    </Row>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Crude Protine</Col>
                        <Col sm={6}>{product.crudeProtine}%</Col>
                    </Row>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Moisture</Col>
                        <Col sm={6}>{product.moisture}%</Col>
                    </Row>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Grade Standed</Col>
                        <Col sm={6}>{product.gradeStanded}</Col>
                    </Row>
                    <Row className='text-black-50 mb-3'>
                        <Col sm={6}>Package Size</Col>
                        <Col sm={6}>{product.packageSize} Kg</Col>
                    </Row>
                    <Row>
                        <Button variant='outline-info' className='my-3 mx-auto' >Buy Now</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    ) 
    : <PageNotFound />
}