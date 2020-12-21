import Col from "react-bootstrap/esm/Col"
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import formatNumber from "../helper/formatNumber"

export const ProductCard = ({product={}}) => {
    return(
        <Col lg={4} md={6} sm={6} className="py-4 mx-auto">
            <Link to={"/products/" + product.id}>
                <Card style={{ width: '18rem' }} className='mx-auto'>
                    <Card.Img variant="top" src={product.img} height='300' width='350' />
                    <Card.Body>
                        <Card.Title style={{ color: 'var(--primary-color' }}>{product.name}</Card.Title>
                        <Card.Text className='text-black-50'>{product.desc.substring(0, 60)}...</Card.Text>
                        <div className="d-flex fex-column justify-content-between">
                            <Button variant="outline-info" className='btn-sm border-0'>View Product</Button>
                            <span className='text-dark'>₹ {formatNumber(product.price)}/{product.packageSize} Kg</span>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}