import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css'
import payWith from '../../../images/pay_with.png'

const Footer = () => {
    return (
        <footer className=' bg-dark text-white pt-5 pb-5 mt-5'>
            <div className='footer container'>
                <div className='footer-item'>
                    <img className='w-25 mb-4' src={logo} alt="" />
                    <h6><FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon><span className='ms-2'>Level-4, 34, Awal Centre, Banani, Dhaka</span></h6>
                    <h6><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><span className='ms-2'>Email: mohammadazimuddin274@gmali.com</span></h6>
                    <h6><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon><span className='ms-2'>Helpline : 01883061967 , 01344810869</span></h6>
                </div>
                <div className='footer-item'>
                    <h6>About us</h6>
                    <h6>Success</h6>
                    <h6>Refund policy</h6>
                    <h6>Terms and Conditions</h6>
                    <h6>Privacy Policy</h6>                
                </div>
                <div>
                    <img src={payWith} alt="" />
                </div>

            </div>

        </footer>
    );
};

export default Footer;