import React, { Component } from 'react'
import style from '../css/Dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import logo from '../img/logo.png'
import comp from '../img/comp.png'
import videoT from '../video/video.mp4'
import YouTube from 'react-youtube';
import {Tooltip} from 'antd'
import 'antd/dist/antd.css';
import Footer from './Footer'
export default class Dashboard extends Component {
    render() {
        return (
            <div>
            <div className={style.header}>
                <div className={style.navT}>
                <Navbar expand="lg">
  <Container className={style.navT_item}>
    <Navbar.Brand href="#home" className={style.logo}>
       <img src={logo}/>
       <p>Dovon</p>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className={style.navT_nav}>
      <Nav className="me-auto">
        <Nav.Link className={style.lik} href="#home">Bosh sahifa</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Link</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Link</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Link</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Bog'lanish</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                </div>
         
         <Container><Row>
             <Col lg={6} md={6} sm={12} className={style.head_textCol}>
                 <p>Sifat va qulay narxlar</p>
                 <h1>Bizning eng oliy maqsadimiz mijozlarimiz uchun qulaylik yaratish va ularga sifatli mahsulot yetkazish</h1>

                 <a target="_blank" href="tel:+998930820372">Biz bilan bog'laning</a>
             </Col>
             <Col lg={6} md={6} sm={12} className={style.head_imgCol}>
             <div className={style.head_img}>
           
             <div className={style.comp}>

              <img src={comp}/>
                  
       
              </div> 
             </div>
             </Col>
             </Row></Container>
            </div>
            <div className={style.di}></div>
<div className={style.cards}>
    <Container>
        <Row>
        <Col lg={4} md={4} sm={12}>
        <div className={style.cards_item}>
            <div className={style.cards_icon}>
                <i className="fas fa-palette"></i>
            </div>
            <h1>Dizayn</h1>
            <p>Mahsulotimiz o'ziga xos dizaynga ega. Og'irlik va hajm jihatdan boshqa kompaniya mahsulotlaridan ajralib turadi. Hajmining ixchamligi tufayli kompyuter olib yurishda hech qanday noqulaylik tug'dirmaydi.</p>
        </div>
                
                </Col>
                <Col lg={4} md={4} sm={12}>
                <div className={style.cards_item}  id="fer">
            <div className={style.cards_icon}>
                <i className="fas fa-laptop"></i>
            </div>
            <h1>Sifat</h1>
            <p>Kompyuterlarimiz sifat darajasi bo'yicha dunyoning eng mashhur brandlari bilan bahslasha oladi. Har bir mahsulotimizga 3 yillik kafolat beramiz. Shu muddat ichida biror kamchilik sezilsa servis xizmatimizdan bemalol tekinga foydalanishingiz mumkin.</p>
        </div>
                
                </Col>

            <Col lg={4} md={4} sm={12}>
            <div className={style.cards_item}>
            <div className={style.cards_icon}>
                <i className="fas fa-money-bill-alt"></i>
            </div>
            <h1>Narx</h1> 
            <p>Mijozlarimizga qulaylik tug'dirish maqsadida mahsulotilarimiz narxlarini eng arzon miqdorda belgilaganmiz. Bizning mahsulotimizni xarid qilsangiz pulingiz o'zingiz bilan ketadi.</p>
        </div>
                
            </Col>
       
            </Row>

        
    </Container>
</div>
<div className={style.video}>
    <Row>
        <Col lg={6} md={6} sm={12}>
        <YouTube
                    videoId={
                      "YTOHaGQm_f4"
                    }
                    opts={{
                      width: "100%",
                      height: "300px",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 0,
                      },
                    }}
                    className={style.video}
                  />
        </Col>
        
        <Col lg={6} md={6} sm={12}>
            <div className="cards_icon">
                <i className="fas fa-video"></i>
            </div>
            <h1>Biz haqimizda</h1>
            <p>Bizning asosiy maqsadimiz sizga sifatli va qulay narxdagi mahsulot yetkazib berish. Mahsulotimizning ajoyib dizayni va jahonning eng mashhur brendlari bilan tenglasha oladigan sifatidan bahra oling</p>
        </Col>
    </Row>
</div>
<div className={style.blue1}></div>
<div className={style.blue2}></div>
<div className={style.icon}>
    <Container>
        <h1>Biz bilan bog'laning</h1>
        <Row>
           <Col lg={6} md={6} sm={12}  className={style.cl}>
<div className={style.icon_item}>
    <Row>
    <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}>
    <Tooltip placement="right" title="+998930820372">
        <a href="tel:+998930820372" target="_blank" className="cards_icon">
      
        <i className="fas fa-phone"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}>
        <Tooltip placement="left" title="ittower01@gmail.com">

        <a href="mailto:ittower01@gmail.com" target="_blank" className="cards_icon">
        <i className="fas fa-envelope"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}>
        <Tooltip placement="right" title="Telegram">

        <a href="#" target="_blank" className="cards_icon">
        <i className="fab fa-telegram"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}>
        <Tooltip placement="left" title="Instagram">
 
        <a href="#" target="_blank" className="cards_icon">
        <i className="fab fa-instagram"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}>
        <Tooltip placement="right" title="Facebook">

        <a href="#" target="_blank" className="cards_icon">
        <i className="fab fa-facebook"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'10px'}}>
        <Tooltip placement="left" title="You tube">

        <a href="#" target="_blank" className="cards_icon">
        <i className="fab fa-youtube"></i>
    </a></Tooltip>

        </Col>

    </Row>

</div>
           </Col>
        </Row>
    </Container>
</div>
<Footer/>
            </div>
         
        )
    }
}