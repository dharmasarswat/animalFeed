import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/esm/Button"
import { ProductCard } from "./ProductCard"
import { products } from "../assets/products"

export const DairyNutrition = () => {
    const selectedProductList = products.filter(obj => obj.type === 'dairy')

    return (
        <Container>
            <Row style={{ minHeight: '80vh' }} className="align-content-center hero_row mt-4">
                <Col md={7}>
                    <h1 style={{ fontSize: '48px', color: 'var(--primary-color)', fontWeight: '700' }} className='mt-5'>Dairy Nutrition</h1>
                    <h6 style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">Quality of feed, youngstock rearing, the transition period.</h6>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-5">India is the world’s largest producer and consumer of milk, with rapidly growing demand. Our Cattle Feed products are prepared with a deep understanding of Indian feeding practices and the breed and milk production levels of cows and buffaloes. These products contain proteins, energy, minerals and vitamins in adequate quantity and proportion to meet the nutritional requirements of dairy cattle. We offer a variety of Cattle Feed to enhance milk production, reproductive ability and the overall health of cattle. We also work closely with farmers and offer on-site assistance to help them achieve higher yields.</p>
                    <a href='#discover' ><Button variant='outline-info' className='text-center'>Discover</Button></a>
                </Col>
                <Col md={4} className='heroImageContainer mx-auto'>
                    <img src={process.env.PUBLIC_URL+'/images/cow.png'} alt="cow" style={{ width: '320px', height: 'auto', marginTop: '40px' }}  />
                </Col>
                <Col md={12} className='text-center mb-0 pb-0 mt-5'  id='discover'><img src={process.env.PUBLIC_URL+'/images/down-arrow.gif'} alt="Scroll down" height='auto' width={100} /></Col>
            </Row>
            <Row style={{color:'var(--primary-color)' }} className='font-weight-bold text-center my-5' >The success of your dairy farm depends to a large extent on 4 main areas; the quality of feed, youngstock rearing, the transition period, and forage. These 4 areas are also at the basis of our Feed2Milk approach, which looks at every facet of setting and, more importantly, achieving the right goals for your business.</Row>
            <Row style={{ fontSize: '22px' }} className="text-muted mt-4 mb-5">Our Dairy Feed Products</Row>
            <Row className='my-3'>
                {selectedProductList.map((data, index) => {
                    return <ProductCard key={index} product={data}/>
                })}
            </Row>
        </Container>
    )
}