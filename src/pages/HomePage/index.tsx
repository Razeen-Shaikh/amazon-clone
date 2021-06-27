import "./home.scss"
import Product from "../Product"

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home-img" src="https:images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="Banner" />

                <div className="home_row">
                    <Product
                        id="382738273"
                        title=""
                        price={20.00}
                        image="https:images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product id="382738273" title="" price={20.00} image="https:images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="382738273" title="" price={20.00} image="https:images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                    <Product id="382738273" title="" price={20.00} image="https:images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                    <Product id="382738273" title="" price={20.00} image="https:images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                </div>

                <div className="home_row">
                    <Product id="382738273" title="" price={20.00} image="https:images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
