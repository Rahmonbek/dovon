import React, { Component } from 'react'
import '../App.css';
import style from '../css/Dashboard.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import logo from '../img/logo.png'
import comp from '../img/comp.png'
import videoT from '../video/video.mp4'
import YouTube from 'react-youtube';
import {Tooltip} from 'antd'
import 'antd/dist/antd.css';
import FooterA from './FooterA'

export default class Dashboard extends Component {
    render() {
        return (
            <div style={{overflowX:'hidden'}}>
            <div className={style.header}>
                <div className={style.navT}>
                <Navbar expand="lg">
  <Container className={style.navT_item}>
    <Navbar.Brand href="#home" className={style.logo}>
       <img src={logo}/>
       <p>Dovon</p>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none'}} />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto" className={style.navT_nav}>
        <Nav.Link className={style.lik} href="#home">Bosh sahifa</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Mahsulotlarimiz</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Biz haqimizda</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Skidkalar</Nav.Link>
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
             </Row></Container><div className={style.di}></div>
            </div>
            
<div className={style.cards}>
    <Container>
        <Row>
        <Col lg={4} md={12} sm={12}>
        <div className={style.cards_item}>
            <div className={style.cards_icon}>
                <i className="fas fa-palette"></i>
            </div>
            <h1>Dizayn</h1>
            <p>Mahsulotimiz o'ziga xos dizaynga ega. Og'irlik va hajm jihatdan boshqa kompaniya mahsulotlaridan ajralib turadi. Hajmining ixchamligi tufayli kompyuter olib yurishda hech qanday noqulaylik tug'dirmaydi.</p>
        </div>
                
                </Col>
                <Col lg={4} md={12} sm={12}>
                <div className={style.cards_item1}  id="fer">
            <div className={style.cards_icon}>
                <i className="fas fa-laptop"></i>
            </div>
            <h1>Sifat</h1>
            <p style={{zIndex:'10',textShadow:'0px 0px 5px white'}}>Kompyuterlarimiz sifat darajasi bo'yicha dunyoning eng mashhur brandlari bilan bahslasha oladi. Har bir mahsulotimizga 3 yillik kafolat beramiz. Shu muddat ichida biror kamchilik sezilsa servis xizmatimizdan bemalol tekinga foydalanishingiz mumkin.</p>
        </div>
                
                </Col>

            <Col lg={4} md={12} sm={12}>
            <div className={style.cards_item}>
            <div className={style.cards_icon}>
                <i className="fas fa-money-bill-alt"></i>
            </div>
            <h1>Narx</h1> 
            <p style={{zIndex:'10',textShadow:'0px 0px 5px white'}}>Mijozlarimizga qulaylik tug'dirish maqsadida mahsulotilarimiz narxlarini eng arzon miqdorda belgilaganmiz. Bizning mahsulotimizni xarid qilsangiz pulingiz o'zingiz bilan ketadi.</p>
        </div>
                
            </Col>
       
            </Row>

        
    </Container><div className={style.blue1}></div>
<div className={style.blue2}></div>
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

<div className={style.icon} id="iconH">
    <Container>
        <h1>Biz bilan bog'laning</h1>
        <Row>
           <Col lg={6} md={4} sm={12}  className={style.cl}>
<div className={style.icon_item}>
    <br/>
    <Row>

    <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
    <Tooltip placement="right" title="+998930820372">
        <a href="tel:+998930820372" target="_blank" className="cards_icon">
      
        <i className="fas fa-phone"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <Tooltip placement="left" title="ittower01@gmail.com">

        <a href="mailto:ittower01@gmail.com" target="_blank" className="cards_icon">
        <i className="fas fa-envelope"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <Tooltip placement="right" title="Telegram">

        <a href="#" target="_blank" className="cards_icon">
        <i className="fab fa-telegram"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <Tooltip placement="left" title="Instagram">
 
        <a href="https://www.instagram.com/dovon_mchj/" target="_blank" className="cards_icon">
        <i className="fab fa-instagram"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <Tooltip placement="right" title="Facebook">

        <a href="https://www.facebook.com/Dovon_MCHJ-263868375509293" target="_blank" className="cards_icon">
        <i className="fab fa-facebook"></i>
    </a></Tooltip>

        </Col>
        <Col lg={6} style={{display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <Tooltip placement="left" title="You tube">

        <a href="https://www.youtube.com/channel/UCUOXvyxJgwo5-pTw9fuuyRw" target="_blank" className="cards_icon">
        <i className="fab fa-youtube"></i>
    </a></Tooltip>

        </Col>

    </Row>

</div>
           </Col>
        <Col lg={6} md={8} sm={12} style={{margin:'auto',textAlign:'center'}}>
        <div class="widget">
                    <h5 class="footer-title">Biz bilan bog`lanish:</h5>
                    <div class="textwidget">
                      <div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="en-US" dir="ltr">

                        <form method="post" class="wpcf7-form" novalidate="novalidate">

                          <div class="contact-form-footer">
                            <p><span class="wpcf7-form-control-wrap your-first-name"><input type="text" name="your-first-name" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="F.I.O" /></span></p>
                            <p><span class="wpcf7-form-control-wrap your-email_1"><input type="tel" name="your-email_1" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" placeholder="Telefon  raqamni kiriting" /></span></p>
                            <p><span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Sizning xabaringiz"></textarea></span></p>
                            <div class="Send"><input type="button" value="Yuborish" class="wpcf7-form-control wpcf7-submit" /><span class="ajax-loader" ></span></div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
        </Col>
        </Row>

    </Container>
</div>
<FooterA />
            </div>
         
        )
    }
}
