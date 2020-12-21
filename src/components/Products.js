import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Nav from "react-bootstrap/esm/Nav"
import { useState } from "react"
import { ProductCard } from "./ProductCard"
import { useEffect } from "react"
import { products } from "../assets/products"

const productNav = [
    {
        name: 'All Products',
        value: 'all'
    },
    {
        name: 'Dairy',
        value: 'dairy'
    },
    {
        name: 'Homemix',
        value: 'homemix'
    },
    {
        name: 'Speciality Feed',
        value: 'speciality'
    },
]

export const Products = () => {

    const [selectedProductList, setSelectedProductList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        if(selectedCategory === 'all') setSelectedProductList([...products])
        else {
            var filteredProducts = products.filter(obj => obj.type === selectedCategory)
            setSelectedProductList([...filteredProducts])
        }
    },[selectedCategory])

    return (
        <Container>
            <Row>
                <Col md={8} className='mx-auto my-4 text-center'>
                    <h6 style={{ fontSize: '22px', color: 'var(--primary-color)' }} className="mt-4 mb-3">Providing the finest products to the best feed suppliers.</h6>
                    <p style={{ fontSize: '15px' }} className="text-muted mb-3">Lignin-based pelleting aids for better quality and a more efficient pelleting process. Borregaard is the world's leading supplier of lignin-based products. Available worldwide. Cost efficient. All-Natural products.</p>
                    <p className='text-right font-weight-bold text-black-50'>- Team AnimalFeed</p>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mx-auto mb-4 mt-5'>
                    <Nav fill variant="tabs" defaultActiveKey="all">
                        { productNav.map((data, index) => {
                            return ( 
                                <Nav.Item key={index}>
                                    <Nav.Link eventKey={data.value} onClick={() => setSelectedCategory(data.value)}>{data.name}</Nav.Link>
                                </Nav.Item>
                             )
                        }) }
                    </Nav>
                </Col>
            </Row>
            <Row className='my-3'>
                {selectedProductList.map((data, index) => {
                    return <ProductCard key={index} product={data}/>
                })}
            </Row>
        </Container>
    )
}
