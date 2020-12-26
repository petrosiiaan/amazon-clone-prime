import React from 'react'
import Product from '../Components/Product'
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
           <img className="home__image" src="https://images.ctfassets.net/3cqlnin176yn/1AiBXOlIr9xb5XAXmx4VEq/30b02f514d0adeac51e10cee80a54174/hero-banner.jpg" alt="image_banner" />
           
           <div className="home__row">
            <Product 
            title="The Static Product of Amazon. This is TV from Samsung Series 2018. Since in Germany" 
            id={12233442} 
            image="https://www.beeline.am/img/bee-tv-monitor.png?v=2" 
            price={500.47}
            rating={5}
           />
           <Product 
            title="Apple iPhone 11 [128GB, Black] + Carrier Subscription [Cricket Wireless]" 
            id={435311113} 
            image="https://www.araexpress.am/media/image/11762/iphone-11-64gb.png" 
            price={307.47}
            rating={3}
           />
           </div>
           <div className="home__row">
            <Product 
            title="Nixplay Smart Digital Picture Frame 10.1 Inch, Share Moments Instantly via E-Mail or App" 
            id={12014523} 
            image="https://m.media-amazon.com/images/I/716urzPi1eL._AC_UY218_.jpg" 
            price={290.47}
            rating={4}
           />
           <Product 
            title="SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME128HA)" 
            id={43567643} 
            image="https://m.media-amazon.com/images/I/815cRpgAN3L._AC_UY218_.jpg" 
            price={220.47}
            rating={5}
           />
           <Product 
            title="Apple MacBook Air (13-inch Retina Display, 8GB RAM, 256GB SSD Storage) - Gold (Previous Model)" 
            id={6677547} 
            image="https://m.media-amazon.com/images/I/71thf1SYnGL._AC_UY218_.jpg" 
            price={870.47}
            rating={2}
           />
           </div>
           <div className="home__row" style={{display: "grid", alignContent: "center" }}>
            <Product 
            title="2020 Newest Lenovo IdeaPad 3 15 HD Touch Screen Laptop, Intel 10th Gen Dual-Core i3-1005G1 CPU, 8GB DDR4 RAM, 256GB PCI-e SSD, Webcam, WiFi 5, Bluetooth, Windows 10 S - Almond" 
            id={3456975} 
            image="https://m.media-amazon.com/images/I/719Xp9IGIVL._AC_UY218_.jpg" 
            price={412.47}
            rating={5}
           />
           </div>
        </div>
    )
}

export default Home
