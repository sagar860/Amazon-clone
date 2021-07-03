
import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className ="home">
            <div className="home__container"> 
            <img 
            className="home__image"
            src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png"
            alt="" />
            <div className="home__row">
            <Product 
                     id="1"
                     title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                     price={399}
                     image="https://images.squarespace-cdn.com/content/v1/5998a4141e5b6cc138c7e9cf/1527611316787-ZWDHUKSXUH4TILFK6260/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/IMG_7552.JPG"
                     rating={5}
                      />
            <Product 
            id="2"
            title="SPARNOD FITNESS STH-4200 (4.5HP Peak) Automatic Treadmill (Free Installation Service) - Foldable Treadmill for Home Use with Multifunction and Auto-Incline"
                     price={49990}
                     image="https://images-na.ssl-images-amazon.com/images/I/41EVu4xuulL.jpg"
                     rating={4}/>
            </div>
            <div className="home__row">
            <Product 
            id="3"
            title="New Apple iPhone 11 (128GB) - Purple"
                     price={59990}
                     image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566960958082"
                     rating={5}/>
        
            <Product 
            id="4"
            title="Canon Power Shot G7X Mark II 20.1 MP Digital Vlogging Camera (Black) with 1-inch CMOS Sensor and 4.2X Optical Zoom"
                     price={34990}
                     image="https://images-na.ssl-images-amazon.com/images/I/71HMbZTRyjL._SL1500_.jpg"
                     rating={4}/>
            <Product 
            id="5"
            title="Noise Buds Play V2 Truly Wireless Earbuds with Tru Bass Technology, in-Ear Detection, Environmental Noise Cancellation with 4 Mic System (Celeste Blue)"
                     price={3499}
                     image="https://images.firstpost.com/wp-content/uploads/2021/03/noise-earbuds-1280.jpg"
                     rating={5}/>
                     
            </div>
            <div className="home__row">
            <Product 
            id="6"
            title="AmazonBasics 127cm (50 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB50U20PS (Black)"
                     price={40000}
                     image="https://cdn1.desidime.com/topics/photos/1244147/original/81c5klKpUdL._SL1500_.jpg?1610520235"
                     rating={5}/>
                     
                    
                     
            
                
            </div>
            

            </div>
        </div>
    )
}

export default Home
