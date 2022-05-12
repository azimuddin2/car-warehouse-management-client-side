import React from 'react';
import AppDownload from '../AppDownload/AppDownload';
import Banner from '../Banner/Banner';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CompanyLogo></CompanyLogo>
            <AppDownload></AppDownload>
        </div>
    );
};

export default Home;