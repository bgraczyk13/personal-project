import React from 'react';
import "./Home.js";
import "./Home.css";
import Product from "./Product";



function Home() {
    return (
    <div className="home">
        <div className="home__container">
            <img 
                className="home__image"
                src="https://cdn.hipwallpaper.com/i/19/57/cxaktQ.png"
            />

            <div className="home__row">
                <Product 
                    id="1"
                    title="Old Yeller - Hardcover - Large print, July 11, 1956 by Fred Gipson"
                    price={16.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51HHe3x+6-L._SY344_BO1,204,203,200_.jpg"
                    rating={4} 
                />
                <Product 
                    id="2"
                    title="Amazon - Echo Dot (3rd Gen)"
                    price={20.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287974_sd.jpg;maxHeight=640;maxWidth=550"          
                    rating={5}      
                />
                <Product 
                    id="3"
                    title="Apple 12.9-inch iPad Pro (2020) 512GB"
                    price={249.99}
                    image="https://ss7.vzw.com/is/image/VerizonWireless/ipad-pro-12-9-in-cellular-space-gray-03182020?fmt=pjpg&hei=520"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="4"
                    title="VIZIO V_Series V505-G9 50 inch HDR 4K Smart LED TV"
                    price={349.00}
                    image="https://static.bhphoto.com/images/images500x500/vizio_v505_g9_v_series_50_class_hdr_uhd_1563982618_1437587.jpg"
                    rating={5}
                />
                <Product 
                    id="5"
                    title="Amazon Fire HD 8 10th Generation - 32GB"
                    price={84.95}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEDLVuDdGbfDjcprJ-b39TyESc86l8PhdeAbMqMal0Q9O54xdvPrY1Ohyv8btPPqLpyGNUTwgwkvsh503lQOVSieHPlXv-fHu4CI4dF5cPTQsEVWCnuZqY&usqp=CAE"
                    rating={4}
                />
                <Product 
                    id="6"
                    title="Beats Studio3 Wireless Over-Ear Noise Cancelling Headphones - Gray"
                    price={349.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316142ld.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="7"
                    title="Wavy Black Entertainment Center for TVs up to 65 inches"
                    price={1539.99}
                    image="https://secure.img1-fg.wfcdn.com/im/86669210/resize-h800%5Ecompr-r85/1000/100019107/Pratiksha+Entertainment+Center+for+TVs+up+to+65%2522.jpg"
                    rating={5}
                />
                <Product 
                    id="8"
                    title="Epson Home Cinema 2200 Home Theatre Projector"
                    price={499.99}
                    image="https://snpi.dell.com/snp/images2/300/en-us~AB398905/AB398905.jpg"
                    rating={5}
                />
                <Product 
                    id="9"
                    title="Prime Tower Surround System: Premium Black Ash Finish"
                    price={1249.99}
                    image="https://cdn.shopify.com/s/files/1/0921/3560/products/Prime-Tower-Surround_main_1024x.jpg?v=1584716997"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="10"
                    title="Apple Airpods with Charging Case"
                    price={129.99}
                    image="https://target.scene7.com/is/image/Target/GUEST_da2035e3-ba06-430c-bae4-c3108d02e48f?wid=325&hei=325&qlt=80&fmt=webp"
                    rating={5}
                />
                <Product 
                    id="11"
                    title="MacBook Pro- 13 inch, Space Gray, 256 GB SSD Storage"
                    price={1449.99}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406905000"
                    rating={5}
                />
                <Product 
                    id="12"
                    title="Astro Gamming A50 Wireless Headset + Base Station"
                    price={299.99}
                    image="https://resource.astrogaming.com/w_797,c_limit,q_auto,f_auto,dpr_2.0/content/dam/astro/en/products/a50-headset-with-base-station-gen4/a50-gallery-ps4-01.png?v=1"
                    rating={5}
                />
            </div>
        </div>
        
    </div>
    );
}

export default Home;
