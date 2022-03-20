import React from 'react'
import Product from './Product'
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className="home-banner">
                <img src="./images/home-page-banner.jpg" alt="" className="home-banner-image" />
            </div>

            <div className="home-products">
                <div className="product-row">
                    <Product />
                    <Product />
                </div>
                <div className="product-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="product-row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home