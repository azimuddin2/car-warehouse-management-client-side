import React from 'react';
import appBackground from '../../../images/app_background.png';
import appStore from '../../../images/app_store.png';
import googlePlay from '../../../images/google_play.png'
import appShot from '../../../images/app_shot.png';
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className='container app-background'>
            <div>
                <img className='background-image' src={appBackground} alt="" />
            </div>
            <div className='app'>
                <div className='app-info text-white'>
                    <h6>DOWNLOAD APP</h6>
                    <h1>Download Our Free App Car Service</h1>
                    <h6>Placlder text commonly used detrate visual</h6>
                    <img className='me-3' src={appStore} alt="" />
                    <img src={googlePlay} alt="" />
                </div>
                <div className='app-image'>
                   <img src={appShot} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppDownload;