import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../../../images/banner/banner.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container pt-5 pb-5'>
            <div className='banner-container'>
                <div className='banner-info'>
                    <h4 className='search'>Search your...</h4>
                    <h1 className='banner-title'>DREAM CAR</h1>
                    <p>A show car, sometimes called a dream car, is a custom made automobile created specifically for public display, rather than sale. They are shown at auto shows and other exhibitions. Show cars can either come from car companies or from private individuals</p>
                    <button className='banner-button'> BROWSE INVENTORY <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon></button>
                </div>
                <div>
                    <img className='w-100' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;