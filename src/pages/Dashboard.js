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
import Carousel from './Carousel';
import { BounceLoader } from 'react-spinners';
import uz from '../img/uz.jpg'
import chin from '../img/chin.jpg';
import dovon_cost from '../img/dovon_cost.jpg';
import ot_logo from '../img/ot_logo.jpg';
import asaka from '../img/asaka.jpg';

// BounceLoader

export default class Dashboard extends Component {
    state={
        loader:false
    }
    /* componentDidMount(){
        setTimeout(() => {
            this.setState({
                loader:false
            })
        }, 400)
    } */
    render() {
        return (
            <>
            {this.state.loader?
            <div className="loader">
<img src={uz} style={{width:'100px', marginRight:'20px'}}/>
<BounceLoader color="blue" loading={this.state.loader}  size={100} />
<img src={chin} style={{width:'100px', marginLeft:'20px'}}/>
            </div>:
            <div style={{overflowX:'hidden'}}>
            <div className={style.header}>
                <div className={style.navT}>
                <Navbar expand="lg">
  <Container className={style.navT_item}>
    <Navbar.Brand href="#home" className={style.logo}>
       <img src={logo}/>
       <p>Davon</p>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none'}} />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto" className={style.navT_nav}>
        <Nav.Link className={style.lik} href="#home">Bosh sahifa</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Mahsulotlarimiz</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Biz haqimizda</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Chegirmalar</Nav.Link>
        <Nav.Link className={style.lik} href="#link">Bog'lanish</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
                </div>
         
         <Container><Row>
             <Col lg={6} md={6} sm={12} className={style.head_textCol}>
                 <p>Sayt test rejimida ishlamoqda !!!</p>
                 <h1>Bizning eng oliy maqsadimiz mijozlarimiz uchun qulaylik yaratish va ularga sifatli mahsulot yetkazish</h1>

                 <a target="_blank" href="tel:+998 97 585-78-77">Biz bilan bog'laning</a>
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
            <p style={{zIndex:'10',textShadow:'0px 0px 5px white'}}>Noutbook sifat darajasi bo'yicha dunyoning eng mashhur brendlari bilan bahslasha oladi. Har bir mahsulotimizga 6 oylik kafolat beramiz. Shu muddat ichida biror kamchilik sezilsa servis xizmatimizdan bemalol tekinga foydalanishingiz mumkin.</p>
        </div>
                
                </Col>

            <Col lg={4} md={12} sm={12}>
            <div className={style.cards_item}>
            <div className={style.cards_icon}>
                <i className="fas fa-money-bill-alt"></i>
            </div>
            <h1>Narx</h1> 
            <p style={{zIndex:'10',textShadow:'0px 0px 5px white'}}>Mijozlarimizga qulaylik tug'dirish maqsadida mahsulotlarimiz narxlarini eng arzon miqdorda belgilaganmiz. Bizning mahsulotimizni xarid qilsangiz pulingiz o'zingiz bilan ketadi.</p>
        </div>
                
            </Col>
       
            </Row>

        
    </Container><div className={style.blue1}></div>
<div className={style.blue2}></div>
</div>
<div className={style.costs}>
    <img src={ot_logo} className={style.ot_logo} />
<Container>
    <Row>
    <Col lg={12} className="d-flex align-items-center">
    <h1>"Davon" MCHJ</h1>
    </Col>
    <Col lg={12}>
    <h2>Notebook DW156</h2>
    </Col>
    </Row>
<Row>
    
    <Col lg={7} md={12}  className='d-flex'>
    <Row>
    <Col xs={3} className=" d-flex flex-column align-items-start"><p>Protsessor:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>Intel Celeron J3455 1,50 GHz (2 МБ kesh-xotira, chastota 2,3 ГГц)</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"><p>Yadro soni:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>4</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"><p>Tezkor xotira:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>8 ГБ  DDR4</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Doimiy xotira:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>512 ГБ  SSD</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Video karta:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
         <p><b>Intel UHD Graphics 500</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Monitor:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>15,6-dyum 1920 x 1080 FHD IPS</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>WiFi:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>WIFI 802.11 a/b/g/n 2,4 G +5G WIFI +BT, Bluetooth4.2</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Web camera:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>0,3 Mp</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start">  <p>Batareya:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>Lithium-ion polymer battery  7.6V, 5000mAh, about 6-8 hours</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start">  <p>Ethernet:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
       <p><b>RJ45</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start">  <p>Interfeys:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
       <p><b>USB Type C*1 + USB port*2, 1*Mini HDMI, ∮ 3.5mm standard headphone jack</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Klaviatura:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>Ru/En</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Og'irligi:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
       <p><b>1830 г, </b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Umumiy og'irligi:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>2250 г</b></p>
    </Col>
    <Col xs={3} className=" d-flex flex-column align-items-start"> <p>Rangi:</p></Col>
    <Col xs={9} className="d-flex flex-column align-items-start">
        <p><b>Kumush rang</b></p>
    </Col>
    </Row>
    </Col>
    <Col lg={5} md={12} >
    <img className={style.dovon_cost} src={dovon_cost} />
    </Col>

</Row>
</Container>
</div>
<div className={style.video}>
    <Row>
        <Col lg={6} md={6} sm={12}>
        <YouTube
                    videoId={
                      "Q5zjQIStE38"
                    }
                    autoplay={true}
                    muted={true}
                    opts={{
                      width: "100%",
                      height: "300px",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 1000,
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
<Carousel/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

<div className={style.asaka}>
    <Container>
        <img className={style.asaka_logo} src={asaka} />
        <img className={style.ot_logo} src={ot_logo} />
        <Row  >
            <Col lg={12} className="d-flex justify-content-center align-items-center"><h1>Bankdan sotib olish tartibi</h1></Col>
        </Row>
        <Row style={{marginTop:"30px"}}>
            <Col md={6} >
                <h3 style={{marginTop:"80px"}}>Naqd sotib olish</h3>
                <h3>3 800 000 so'm</h3>
                <h3 style={{marginTop:"70px"}} >Bir yilgacha bo'lib to'lash</h3>
                <h4>Narxi 		– 4 440 000</h4>
                <h4>Sug’urta to‘lovi 	– 44 400</h4>
                <h4>Oylik to‘lovi 	– 370 000</h4>
            </Col>
            <Col md={6} >
                <table className={style.table} >
                    <tr>
                        <td colspan={3} width="50%">Narxi</td>
                        <td colspan={3} width="50%">4 440 000</td>
                    </tr>
                    <tr>
                        <td colspan={3} width="50%">To'lov muddati</td>
                        <td colspan={3} width="50%">12 oy</td>
                    </tr>
                    
                    <tr>
                        <th colspan={1} width="12.5%">Oylar</th>
                        <th colspan={2} width="37.5%">Qolgan to'lov</th>
                        <th colspan={3} width="50%">Oylik to'lov</th>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
1
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
2
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1}  width="12.5%" >
3
                        </td>
                        <td  colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3}  width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
4
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
5
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
6
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
7
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
8
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
9
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
10
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
11
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={1} width="12.5%" >
12
                        </td>
                        <td colspan={2} width="37.5%" >
4 440 000,00
                        </td>
                        <td colspan={3} width="50%" >370 000,00</td>
                    </tr>
                    <tr>
                        <td colspan={3} width="50%">Jami</td>
                        <td colspan={3} width="50%">4 440 000</td>
                    </tr>
                    <tr>
                        <td colspan={3} width="50%">Sug'urta foizi 1% 12 oy uchun</td>
                        <td colspan={3} width="50%">44 400</td>
                    </tr>
                </table>
            </Col>
        </Row>
    </Container>
</div>

<div className={style.icon} id="iconH">
    <Container>
        <h1>Biz bilan bog'laning</h1>
        <Row>
           <Col lg={6} md={4} sm={12}  className={style.cl}>
<div className={style.icon_item}>
    <br/>
    <Row>

    <Col lg={6} style={{display:'flex', flexDirection:"column", alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
    <h5 style={{color:'blue'}}> +998 97 585-78-77</h5>
  
        <a href="tel:+998 97 585-78-77" target="_blank" className="cards_icon">
      
        <i className="fas fa-phone"></i>
    </a>
    

        </Col>
        <Col lg={6} style={{display:'flex', flexDirection:"column",  alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <h5 style={{color:'blue'}}>davon@gmail.com</h5>

        <a href="mailto: davon@gmail.com" target="_blank" className="cards_icon">
        <i className="fas fa-envelope"></i>
    </a>

        </Col>
        <Col lg={6} style={{display:'flex', flexDirection:"column",  alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <h5 style={{color:'blue'}}>Telegram</h5>

        <a href="https://t.me/dovon_nutbuki" target="_blank" className="cards_icon">
        <i className="fab fa-telegram"></i>
    </a>

        </Col>
        <Col lg={6} style={{display:'flex', flexDirection:"column",  alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <h5 style={{color:'blue'}}>Instagram</h5>
        <a href="https://www.instagram.com/dovon_mchj/" target="_blank" className="cards_icon">
        <i className="fab fa-instagram"></i>
    </a>

        </Col>
        <Col lg={6} style={{display:'flex', flexDirection:"column",  alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <h5 style={{color:'blue'}}>Facebook</h5>

        <a href="https://www.facebook.com/Dovon_MCHJ-263868375509293" target="_blank" className="cards_icon">
        <i className="fab fa-facebook"></i>
    </a>

        </Col>
        <Col lg={6} style={{display:'flex', flexDirection:"column",  alignItems:'center', justifyContent:'center', marginBottom:'40px'}}>
        <h5 style={{color:'blue'}}>You tube</h5>

        <a href="https://www.youtube.com/channel/UCUOXvyxJgwo5-pTw9fuuyRw" target="_blank" className="cards_icon">
        <i className="fab fa-youtube"></i>
    </a>

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

            }
            </>
                     
        )
    }
}
