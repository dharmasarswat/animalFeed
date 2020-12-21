import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/esm/Button"
import { ProductCard } from "./ProductCard"
import { products } from "../assets/products"

export const SpecialityFeed = () => {
    const selectedProductList = products.filter(obj => obj.type === 'speciality')

    return (
        <Container>
            <Row style={{ minHeight: '80vh' }} className="align-content-center hero_row mt-4">
                <Col md={7}>
                    <h1 style={{ fontSize: '48px', color: 'var(--primary-color)', fontWeight: '700' }} className='mt-5'>Speciality Feed</h1>
                    <h6 style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">For over 50 years, Specialty Mix has been a leading wholesale supplier of a wide range of quality pet and animal food, stock feeds, pharmaceuticals, supplements, health care and accessories.</h6>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-5">Whether you are looking to stock leading brands for dog, cat, horse, bird, poultry or other small pets and animals, Specialty Mix carries Australia's leading brands. For approved wholesale customers Specialty Mix provides prompt delivery throughout Victoria from our extensive warehouse and distribution centre in Sunshine, using our own fleet of delivery trucks or your choice of freight forwarding trucking depots.</p>
                    <a href='#discover' ><Button variant='outline-info' className='text-center'>Discover</Button></a>
                </Col>
                <Col md={4} className='heroImageContainer mx-auto'>
                    <img src={process.env.PUBLIC_URL+'/images/sheep.png'} alt="cow" style={{ width: '320px', height: 'auto', marginTop: '40px' }}  />
                </Col>
                <Col md={12} className='text-center mb-0 pb-0 mt-5'  id='discover'><img src={process.env.PUBLIC_URL+'/images/down-arrow.gif'} alt="Scroll down" height='auto' width={100} /></Col>
            </Row>
            <Row style={{color:'var(--primary-color)' }} className='font-weight-bold text-center my-5' >The success of your dairy farm depends to a large extent on 4 main areas; the quality of feed, youngstock rearing, the transition period, and forage. These 4 areas are also at the basis of our Feed2Milk approach, which looks at every facet of setting and, more importantly, achieving the right goals for your business.</Row>
            <Row style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">Our Speciality Feed Products</Row>
            <Row className='my-3'>
                {selectedProductList.map((data, index) => {
                    return <ProductCard key={index} product={data}/>
                })}
            </Row>
        </Container>
    )
}