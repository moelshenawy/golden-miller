import './index.scss';
import { useState, useContext, useEffect } from 'react';
import Navbar from './../Navbar/index';
import Footer from './../Footer/index';
import { StatusCarDetails } from '../../layouts/index';
import { appContext } from './../../Context/Store';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Puff } from 'react-loader-spinner'

const CarStatus = () => {
  const { baseURL, userToken } = useContext(appContext)
  const [loader, setLoader] = useState(false)
  const [carStatus, setCarStatus] = useState(null)

  const navigate = useNavigate()



  useEffect(() => {
    getOrders()
  }, [])





  // Call APIS
  const getOrders = async () => {
    setLoader(true)

    const { data } = await axios.get(`${baseURL}/client/clientOrders`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }).catch((err) => {
      if (err.response.status === 401) {
        setLoader(false)
        navigate('/login')
      }
    })



    if (data.data.length > 0) {
      setLoader(false)
      setCarStatus(data);
      if (data.data?.length > 0) {
        setLoader(false)
        setCarStatus(data);

      }
    } else {
      setLoader(false)
      setCarStatus(null);

    }
  };

  return (
    <>
      <Navbar />

      {loader !== true ?
        carStatus !== null ? <>
          <section id='car-tracking'>
            <div className="container">

              <header>
                <h1 className='h2'>Your Status Car</h1>
              </header>

              <div className="car-track-status">
                <div className="car-track-status-container">
                  <div className="line-item ">
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.reserved === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 className={` mb-3 text-center`}>Reserved</h3>
                          </div>
                          <div className="date">
                            <h3 className="date">{carStatus.data[0]?.date_reserved !== null ? carStatus.data[0]?.date_reserved : "Pending"}</h3>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.payed === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 className="mb-3 text-center ">Payed</h3>

                          </div>
                          <div className="date">
                            <h3>{carStatus.data[0]?.date_payed !== null ? carStatus.data[0]?.date_reserved : "Pending"}</h3>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.packed_up
                        === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 className=" mb-3 text-center ">
                              Packed Up
                            </h3>
                          </div>
                          <div className="date"><h3>{carStatus.data[0]?.date_packed_up !== null ? carStatus.data[0]?.date_packed_up : "Pending"}</h3></div>
                        </div>
                      </div>
                    </div>
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.delivered_to_port
                        === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 className="mb-3 text-center ">Delivered to port</h3>
                          </div>

                          <div className="date">
                            <h3>{carStatus.data[0]?.date_delivered_to_port !== null ? carStatus.data[0]?.date_packed_up : "Pending"}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.loaded_on_vessel
                        === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 className=" mb-3 text-center ">Loaded on vessel</h3>
                          </div>

                          <div className="date">
                            <h3 >{carStatus.data[0]?.date_loaded_on_vessel
                              !== null ? carStatus.data[0]?.date_packed_up : "Pending"}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.arrived_to_port
                        === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 >Arrived to port</h3>
                          </div>
                          <div className="date">
                            <h3>{carStatus.data[0]?.date_arrived_to_port !== null ? carStatus.data[0]?.date_arrived_to_port
                              : "Pending"}</h3>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line-item-content">
                      <div className={`line-item-inner ${carStatus.data[0]?.delivered
                        === 1 ? 'active' : 'not-updated'}`}>
                        <div className="line-item-text">
                          <div className="title">
                            <h3 >Delivered</h3>
                          </div>
                          <div className="date">
                            <h3 >{carStatus.data[0]?.date_delivered
                              !== null ? carStatus.data[0]?.date_packed_up : "Pending"}</h3>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>

            </div>
          </section>
          <StatusCarDetails carStatus={carStatus} />

        </> : <>
          <div className="container">
            <div className="no-car">
              <h1>The Car Status not updated yet!</h1>
            </div>
          </div>

        </>
        :
        <div className='d-flex mt-5 align-items-center justify-content-center'>
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#b57f4f"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      }



      <Footer />
    </>
  )
}

export default CarStatus