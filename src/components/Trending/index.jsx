import { useState } from 'react';
import './index.scss'
import Carousel from "react-elastic-carousel";
import imgs from '../../assets/constants/imgs'
import { Link } from 'react-router-dom';
import trendingData from "../../data/db.json"



const Trending = () => {
  const trendingCars = trendingData.trending
  const { bmw, i0, i1, carStatus } = imgs;

  const [breakPoints, setBreakPoints] = useState([
    { width: 1, itemsToShow: 1, pagination: false },
    // { width: 1, itemsToShow: 2, pagination: false },
    { width: 337, itemsToShow: 2, },

    { width: 450, itemsToShow: 2, },
    { width: 550, itemsToShow: 3, },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ])



  const trendingCarsss = [
    {
      id: 1,
      brand: "BMW",
      modelName: "M4 GTS",
      modelYear: "2022",
      path: "/cardetails",
      acceleration: "44X42",
      img: bmw,
      price: "2000"
    },
    {
      id: 2,
      brand: "Mercedes",
      modelName: "Mercedes-AMG CLA",
      modelYear: "2021",
      path: "/cardetails",
      acceleration: "44X42",
      img: carStatus,
      price: "3000"
    },
    {
      id: 3,
      brand: "BMW",
      modelName: "M4 GTS",
      modelYear: "2022",
      path: "/cardetails",
      acceleration: "44X42",
      img: i0,
      price: "2000"
    },
    {
      id: 4,
      brand: "BMW",
      modelName: "M4 GTS",
      modelYear: "2022",
      path: "/cardetails",
      acceleration: "44X42",
      img: i1,
      price: "2000"
    },
    {
      id: 5,
      brand: "BMW",
      modelName: "M4 GTS",
      modelYear: "2022",
      path: "/cardetails",
      acceleration: "44X42",
      img: i1,
      price: "2000"
    },
    {
      id: 6,
      brand: "Mercedes",
      modelName: "Mercedes-AMG CLA",
      modelYear: "2021",
      path: "/cardetails",
      acceleration: "44X42",
      img: i0,
      price: "3000"
    },
    {
      id: 7,
      brand: "BMW",
      modelName: "M4 GTS",
      modelYear: "2022",
      path: "/cardetails",
      acceleration: "44X42",
      img: i0,
      price: "2000"
    },
    {
      id: 8,
      brand: "BMW",
      modelName: "M4 GTS",
      modelYear: "2022",
      path: "/cardetails",
      acceleration: "44X42",
      img: carStatus,
      price: "2000"
    }

  ]


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
                trendingCarsss.map((car, index) => (
                  <div className="card-inner" key={index}>
                    <div className="img-container">
                      <img src={car.img} alt="" loading='lazy' />
                    </div>
                    <div className='text-container'>
                      <div className="brand">
                        <h5 className='h6'>{car.brand}</h5>
                      </div>
                      <div className="model-name">
                        <h5>{car.modelName}</h5>
                      </div>
                      <div className="model-year d-flex">
                        <h5>Model year</h5>
                        <span>{car.modelYear}</span>
                      </div>
                      <div className="acceleration d-flex">
                        <h5>Acceleration</h5>
                        <span>{car.acceleration}</span>
                      </div>
                      <div className="
                    price d-flex">
                        <h5>Starting
                          Price</h5>
                        <span>{car.
                          price} $</span>
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
