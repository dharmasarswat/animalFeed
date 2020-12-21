import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import { Link } from 'react-router-dom'
import '../css/footer.css'
import { QuickLinks, OurSectors } from "../assets/footerLinks"


export const Footer = () => {
    return (
        <footer className='bg-light'>
            <Container className='py-4'>
                <Row style={{ justifyContent: 'space-around' }} className='pt-5'>
                    <Col md={4} className='mx-auto mb-4 p-0 pl-3'>
                        <div className="text-black-50 font-weight-bold mb-4" style={{ fontSize: '22px' }}>Animal Feed UK Limited</div>
                        <p style={{ fontSize: '15px' }} className="text-muted">Horizon House, Fred Castle Way, Rougham Industrial Estate, Rougham, Bury St Edmunds, IP30 9ND</p>
                        <p style={{ fontSize: '15px' }} className="text-muted">Registration Number: 62904 - England. VAT Reg No. GB 720113890</p>
                    </Col>
                    <Col md={3} sm={6} className='mx-auto mb-5'>
                        <p className="text-black-50 font-weight-bold" style={{ fontSize: '18px' }}>Quick Links</p>
                        { QuickLinks.map((data, index) => {
                            return ( <Link to={data.path} className='nav-link footer-link' key={index}>{data.name}</Link> )
                        }) }
                    </Col>
                    <Col md={3} sm={6} className='mx-auto mb-5'>
                        <p className="text-black-50 font-weight-bold" style={{ fontSize: '18px' }}>Our sectors</p>
                        { OurSectors.map((data, index) => {
                            return ( <Link to={data.path} className='nav-link footer-link' key={index}>{data.name}</Link> )
                        }) }
                    </Col>
                    <Col md={1} className='justify-content-center align-items-center text-center right-0 m-0 pb-4 px-0'>
                        <img src={process.env.PUBLIC_URL+'/animal-feed.png'} alt="Animal Feed" height={'auto'} width={100} />
                    </Col>
                    <div className="my-4" style={{ height: '1px', width: '90%', backgroundColor: 'rgba(204, 204, 204, 0.507)' }} ></div>
                    <Col md={12} className='text-center font-weight-normal text-black-50' style={{ letterSpacing: '1px' }} >Copyright © 2018-2020 Animal Feed. All rights reserved.</Col>
                </Row>
            </Container>
        </footer>
    )
}