import React, { Component } from 'react'
import './FooterA.css'
import gerb from '../img/logo.png'
import { Container } from 'react-bootstrap'
export default class FooterA extends Component {
  render() {
    return (
      <div> 
  
<footer class="footer-distributed">

			<div class="footer-left" >
{/* 
				<h3><img src={gerb} style={{width:'200px'}}></img></h3> */}

				<p class="footer-links">
					<a href="#" class="link-1">Bosh sahifa</a>
					
					<a href="#">Yangiliklar</a>
				
					<a href="#">Mahsulotlar</a>
				
					<a href="#">Buyurtma qilish</a>
					
					<a href="#">Bog'lanish</a>
					
					<a href="#">Foto lavhalar</a>
				
                    <a href="#">Video lavhalar</a>
                </p>
<br/>
				<p class="footer-company-name" style={{color:'white'}}> IT Tower © 2021 tel : +9989308202372</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Toshkent shahri Yakkasaroy tumani</span>Ortiqho'jayev ko'chasi 5 - uy</p>
				</div> 

				<div>
					<i class="fa fa-phone"></i>
					<p>+998 95 711 95 53<br/>Bizga qo'ng'iroq qiling</p> 
                                    
				</div>

				{/* <div>
                <p style={{color:'white'}}>
                               Emailingizni yuborish orqali biz bilan bog'lanishingiz mumkin</p>
                                <form action="#">
                                    <div className="form-row">
                                        <div className="col dk-footer-form" style={{display:'flex',justifyContent:'center'}}>
                                            <input type="email" className="form-control" placeholder="Email Address"/>
                                            <button type="submit">
                                                <i className="fa fa-send"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
				</div> */}

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>Ijtimoiy tarmoqlarimizga obuna bo'ling</span>
					</p>

				<div class="footer-icons">

					<a href="#"> <i class="fa fa-google-plus"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#">  <i class="fa fa-linkedin"></i></a>
					<a href="#">  <i class="fa fa-instagram"></i></a>

				</div>

			</div>

		</footer>
      </div>
    )
  }
}
