import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/esm/Button"
import { ProductCard } from "./ProductCard"
import { products } from "../assets/products"

export const Homemix = () => {
    const selectedProductList = products.filter(obj => obj.type === 'homemix')

    return (
        <Container>
            <Row style={{ minHeight: '80vh' }} className="align-content-center hero_row mt-4">
                <Col md={7}>
                    <h1 style={{ fontSize: '48px', color: 'var(--primary-color)', fontWeight: '700' }} className='mt-5'>Homemix Nutrition</h1>
                    <h6 style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">This world class model has been designed and fine-tuned over many years.</h6>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-5">Through our ongoing investment in research and development, we are continually updating our knowledge base.  Our Nutritionists and advisers are  combine expertise and experience gained over many years with first class nutritional knowledge to help you design your own bespoke diets.</p>
                    <a href='#discover' ><Button variant='outline-info' className='text-center'>Discover</Button></a>
                </Col>
                <Col md={4} className='heroImageContainer mx-auto'>
                    <img src={process.env.PUBLIC_URL+'/images/hen.png'} alt="hen" style={{ width: '320px', height: 'auto', marginTop: '40px' }}  />
                </Col>
                <Col md={12} className='text-center mb-0 pb-0 mt-5'  id='discover'><img src={process.env.PUBLIC_URL+'/images/down-arrow.gif'} alt="Scroll down" height='auto' width={100} /></Col>
            </Row>
            <Row style={{color:'var(--primary-color)' }} className='font-weight-bold text-center my-5' >Animal Feed is strategic partners with Trouw Nutrition. This collaborative partnership provides Homemix Nutrition with access to an unparalleled level of research and development and an extended knowledge of micro-nutrients used in Premixes.</Row>
            <Row style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">Our Homemix Feed Products</Row>
            <Row className='my-3'>
                {selectedProductList.map((data, index) => {
                    return <ProductCard key={index} product={data}/>
                })}
            </Row>
        </Container>
    )
}