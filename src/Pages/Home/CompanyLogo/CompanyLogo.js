import React from 'react';
import logo1 from '../../../images/company name/logo_1.png';
import logo2 from '../../../images/company name/logo_2.png';
import logo3 from '../../../images/company name/logo_3.png';
import logo4 from '../../../images/company name/logo_4.png';
import logo5 from '../../../images/company name/logo_5.png';
import logo6 from '../../../images/company name/logo_6.png';
import './CompanyLogo.css'


const CompanyLogo = () => {
    return (
        <div className='container mt-5'>
            <h2 className='makes-title'>VEHICLE MAKES</h2>
            <div className='logo-container'>
                <img className='logo' src={logo1} alt="" />
                <img className='logo' src={logo2} alt="" />
                <img className='logo' src={logo3} alt="" />
                <img className='logo' src={logo4} alt="" />
                <img className='logo' src={logo5} alt="" />
                <img className='logo' src={logo6} alt="" />
            </div>
        </div>
    );
};

export default CompanyLogo;