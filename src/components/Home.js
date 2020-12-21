import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/esm/Button"
import '../css/home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productsCategory, settings } from "../assets/home"
import Slider from "react-slick";
import { products } from "../assets/products"
import { ProductCard } from "./ProductCard"
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
        <Container>
            <Row style={{ minHeight: '80vh' }} className="align-content-center hero_row mt-4">
                <Col md={7}>
                    <h1 style={{ fontSize: '48px', color: 'var(--primary-color)', fontWeight: '700' }} className='mt-5'>ANIMAL FEED</h1>
                    <h6 style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">Providing solutions to South East Africa’s protein crisis</h6>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-5">We offer optimal nutritional solutions for any type of farming business and base our approach on targeted plans, in-depth analysis of results all underpinned by our international knowledge pool to help deliver the best results possible for you.</p>
                    <a href='#discover' ><Button variant='outline-info' className='text-center'>Discover</Button></a>
                </Col>
                <Col md={4} className='heroImageContainer mx-auto'>
                    <img src={process.env.PUBLIC_URL+'/images/chicken_bebrages.svg'} alt="chicken_bebrages" className='heroImage'/>
                </Col>
                <Col md={12} className='text-center mb-0 pb-0 mt-5'  id='discover'><img src={process.env.PUBLIC_URL+'/images/down-arrow.gif'} alt="Scroll down" height='auto' width={100} /></Col>
            </Row>
        </Container>
        <Container className='mb-5'>
            <Row>
                <Col md={12} className='text-center my-4' style={{ fontSize: '28px', color: 'var(--primary-color)', fontWeight: '700' }}>Our Promise</Col>
                <Col md={4} className='text-center mx-auto my-3'><img src={process.env.PUBLIC_URL+'/images/animal-care.png'} alt="animal-care" height='auto' width={250} /></Col>
                <Col md={8} className='text-center mb-5 font-weight-bold text-black-50 m-auto'>Animal Feed supplies more than just feed. Our unique Total Feed approach begins with the farmer’s objectives. Our specialists use their knowledge to provide you with expert support and advice which enables us to work with you in the development of your business. We offer optimal nutritional solutions for any type of farming business and base our approach on targeted plans, in-depth analysis of results all underpinned by our international knowledge pool to help deliver the best results possible for you.</Col>
            </Row>
        </Container>
        <Container style={{ marginTop: '150px' }}>
            <Row className='mt-4 mb-5'>
                <Col md={12} className='text-center my-4' style={{ fontSize: '28px', color: 'var(--primary-color)', fontWeight: '700' }}>Our Products</Col>
                <Col md={12} className='mb-5'>
                    <Slider {...settings}>
                        { products.map((data, index) => {
                            return <ProductCard product={data} key={index} />
                        }) }
                    </Slider>
                </Col>
                <Col md={12} className='text-center'><Link to='products'><Button variant='outline-info' className='mx-auto'>View all products</Button></Link></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md={12} className='text-center my-4' style={{ fontSize: '28px', color: 'var(--primary-color)', fontWeight: '700' }}>Products Categories</Col>
                { productsCategory.map((data, index) => {
                    return(
                        <Col md={12} key={index} className='my-4'>
                            <Row className='justify-content-between'>
                                <Col md={6}>
                                    <h6 style={{ fontSize: '22px', color: 'var(--primary-color)' }} className=" my-4">{data.name}</h6>
                                    <p style={{ fontSize: '15px' }} className="text-muted mb-5 text-justify">{data.desc}</p>
                                    <Link to={data.link}><Button variant='outline-info' className='btn-sm' >View {data.name}</Button></Link>
                                </Col>
                                <Col md={4} className='text-center'><img src={process.env.PUBLIC_URL+data.img} alt={data.name} height='auto' width={200} className='my-4' /></Col>
                            </Row>
                        </Col>
                    )
                }) }
            </Row>
        </Container>
        </>
    )
}

export default Home