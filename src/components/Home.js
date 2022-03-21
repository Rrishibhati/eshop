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
                    <Product 
                        id="101"
                        title="Star Dust Women's Hobos Shoulder Bag"
                        price={11.00}
                        rating={4}
                        image="./images/products/perse.jpg"
                    />
                    <Product 
                        id="102"
                        title="boAt Stone 1200 14W Bluetooth Speaker with Upto 9 Hours Battery, RGB LEDs, IPX7 and TWS Feature(Blue)"
                        price={1300.00}
                        rating={5}
                        image="./images/products/boat-speaker.jpg"
                    />
                </div>
                <div className="product-row">
                    <Product 
                        id="103"
                        title="Ramayana for Children"
                        price={603.00}
                        rating={5}
                        image="./images/products/ramayana-book.webp"
                    />
                    <Product
                        id="104"
                        title="Venus Aqua® 6005F Internal Power Filter"
                        price={500.00}
                        rating={2}
                        image="./images/products/aquarium-filter.jpg"
                    />
                    <Product 
                        id="105"
                        title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)"
                        price={110000.00}
                        rating={4}
                        image="./images/products/one-plus-mobile.webp"
                    />
                </div>
                <div className="product-row">
                    <Product
                        id="106"
                        title="OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
                        price={23000.00}
                        rating={4}
                        image="./images/products/one-plus-tv.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home