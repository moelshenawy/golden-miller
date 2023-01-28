import './index.scss';
import { useState } from 'react';
import Navbar from './../Navbar/index';
import Footer from './../Footer/index';
import { StatusCarDetails } from '../../layouts';
const CarStatus = () => {
  const [carStatus, setCarStatus] = useState(null)

  // const statusData = [
  //   { status: { reserved: resStatus: true  } }, date: "11/5/2023", id: 0 },
  // ]


  // console.log(statusData[0].status.reserved)
  return (
    <>
      <Navbar />
      <section id='car-tracking'>
        <div className="container">
          <header>
            <h1 className='h2'>Your Status Car</h1>
          </header>

          <div className="car-track-status">
            <div className="car-track-status-container">
              <div className="line-item ">
                <div className="line-item-content">
                  <div className="line-item-inner">
                    <div className="line-item-text">
                      <div className="title">
                        <h3 className=" mb-3 text-center ">Reserved</h3>
                      </div>
                      <div className="date">
                        <h3 className="date">Saturday 11/05/2023</h3>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="line-item-content">
                  <div className="line-item-inner">
                    <div className="line-item-text">
                      <div className="title">
                        <h3 className="mb-3 text-center ">Payed</h3>

                      </div>
                      <div className="date">
                        <h3>Saturday 2/02/2023</h3>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="line-item-content">
                  <div className="line-item-inner active">
                    <div className="line-item-text">
                      <div className="title">
                        <h3 className=" mb-3 text-center ">
                          Packed Up
                        </h3>
                      </div>
                      <div className="date"><h3>Saturday 11/05/2023</h3></div>
                    </div>
                  </div>
                </div>
                <div className="line-item-content">
                  <div className="line-item-inner not-updated  ">
                    <div className="line-item-text">
                      <div className="title">
                        <h3 className="mb-3 text-center ">Delivered to port</h3>
                      </div>

                      <div className="date">
                        <h3>Saturday 11/05/2023</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-item-content">
                  <div className="line-item-inner not-updated" >
                    <div className="line-item-text">
                      <div className="title">
                        <h3 className=" mb-3 text-center ">Loaded on vessel</h3>
                      </div>

                      <div className="date">
                        <h3 >Saturday 11/05/2023</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-item-content">
                  <div className="line-item-inner not-updated" >
                    <div className="line-item-text">
                      <div className="title">
                        <h3 >Arrived to port</h3>
                      </div>
                      <div className="date">
                        <h3>Saturday 11/05/2023</h3>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-item-content">
                  <div className="line-item-inner not-updated" >
                    <div className="line-item-text">
                      <div className="title">
                        <h3 >Delivered</h3>
                      </div>
                      <div className="date">
                        <h3 >Saturday 11/05/2023</h3>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>

          </div>

        </div>
      </section>

      <StatusCarDetails />
      <Footer />
    </>
  )
}

export default CarStatus