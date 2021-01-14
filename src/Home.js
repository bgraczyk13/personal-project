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
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product 
                    id="1"
                    title="Old Yeller - Hardcover - Large print, July 11, 1956 by Fred Gipson"
                    price={16.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51HHe3x+6-L._SY344_BO1,204,203,200_.jpg"
                    rating={3} 
                />
                <Product 
                    id="2"
                    title="Amazon - Echo Dot (3rd Gen)"
                    price={20.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287974_sd.jpg;maxHeight=640;maxWidth=550"          
                    rating={5}      
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="VIZIO V_Series V505-G9 50 inch HDR 4K Smart LED TV"
                    price={349.00}
                    image="https://static.bhphoto.com/images/images500x500/vizio_v505_g9_v_series_50_class_hdr_uhd_1563982618_1437587.jpg"
                    rating={5}
                />
                <Product 
                    id="4"
                    title="Amazon Fire HD 8 10th Generation - 32GB"
                    price={84.95}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEDLVuDdGbfDjcprJ-b39TyESc86l8PhdeAbMqMal0Q9O54xdvPrY1Ohyv8btPPqLpyGNUTwgwkvsh503lQOVSieHPlXv-fHu4CI4dF5cPTQsEVWCnuZqY&usqp=CAE"
                    rating={4}
                />
                <Product 
                    id="5"
                    title="Beats Studio3 Wireless Over-Ear Noise Cancelling Headphones - Gray"
                    price={349.99}
                    image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6316/6316142ld.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="6"
                    title="Wavy Black Entertainment Center for TVs up to 65 inches"
                    price={1539.99}
                    image="https://secure.img1-fg.wfcdn.com/im/86669210/resize-h800%5Ecompr-r85/1000/100019107/Pratiksha+Entertainment+Center+for+TVs+up+to+65%2522.jpg"
                    rating={5}
                />
                <Product 
                    id="7"
                    title="Epson Home Cinema 2200 Home Theatre Projector"
                    price={499.99}
                    image="https://snpi.dell.com/snp/images2/300/en-us~AB398905/AB398905.jpg"
                    rating={5}
                />
            </div>
        </div>
        
    </div>
    );
}

export default Home;
