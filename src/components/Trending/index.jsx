import { useContext, useState } from 'react';
import './index.scss'
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import { appContext } from '../../Context/Store';



const Trending = () => {

  const { trendingCars } = useContext(appContext)

  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, pagination: false },
    // { width: 1, itemsToShow: 2, pagination: false },
    { width: 337, itemsToShow: 1, },

    { width: 450, itemsToShow: 2, },
    { width: 550, itemsToShow: 3, },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ])





  return (
    <>
      <section id='trending'>

        <div className="container">
          <div className="title">
            <h4>Trending</h4>
          </div>
          <div className="trending-wrap">
            <Carousel breakPoints={breakPoints}
              pagination={true}
            >
              {
                trendingCars?.data?.map((car, index) => (
                  <div className="card-inner" key={index}>
                    <div className="img-container">
                      <img src={car.thunbnail.url} alt="" loading='lazy' />
                    </div>
                    <div className='text-container'>
                      <div className="brand">
                        <h5 className='h6'>{car.car_brand}</h5>
                      </div>
                      <div className="model-name">
                        <h5>{car.car_model}</h5>
                      </div>
                      <div className="model-year d-flex">
                        <h5>Model year</h5>
                        <span>{car.model_year}</span>
                      </div>

                      <div className="
                    price d-flex">
                        <h5>Price Range</h5>
                        <span>{car.range_price} 	&euro;</span>
                      </div>
                      <div className="more-btn">
                        <Link to={`/cardetails/${car.id}`}>
                          <button>
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>

                  </div>
                ))
              }
            </Carousel>
          </div>
        </div>

      </section>
    </>
  )
}

export default Trending
