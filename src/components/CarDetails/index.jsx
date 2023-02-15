import './index.scss'
import Navbar from './../Navbar/index';
import Footer from './../Footer/index';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imgs from '../../assets/constants/imgs'
import ImageGallery from 'react-image-gallery';
import { ArrowDir, Phone } from '../../assets/svgs/'
import "react-image-gallery/styles/css/image-gallery.css";
import { RiGasStationFill } from 'react-icons/ri'
import Joi from 'joi';
import { appContext } from '../../Context/Store';
import { Puff } from 'react-loader-spinner'

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const [email, setEmail] = useState({
    email: "",
  });
  const [errorList, setErrorList] = useState([]);
  const [setIsLoading] = useState(false);
  const [setError] = useState();
  const [isEmailSent, setIsEmailSent] = useState(false)

  const { baseURL, contacts } = useContext(appContext)

  const errRef = useRef()

  const params = useParams();
  const { hourse, } = imgs;


  const getCar = async (id) => {
    const { data } = await axios.get(`${baseURL}/getCars/${id}`);
    setCar(data);
  };

  useEffect(() => {
    getCar(params.id)
  }, []);




  const getEmail = (e) => {
    let myEmail = email
    myEmail[e.target.name] = e.target.value;

    setEmail(myEmail);

  };


  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let validationRes = validationForm();
    // Check if Input is valid
    if (validationRes.error) {
      // push error to error List Array
      setErrorList(validationRes.error.details);

      setIsLoading(false);
      setIsEmailSent(false)

    } else {
      setIsLoading(true);
      setIsEmailSent(false)

      // Send data to api
      const { data } = await axios.post(
        `${baseURL}/subscribe`,
        email
      ).catch(function (err) {

        if (err.response) {
          setIsLoading(false);
          setError(err.response.data.message)
        }
      })
      if (data.code === 200) {
        setIsLoading(false);
        setIsEmailSent(true)
      } else {
        setIsLoading(false);
        setIsEmailSent(false)
        setError(data.message);
      }
    }
  };


  const validationForm = () => {
    let scheme = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "org"] } })
        .required(),

    });

    return scheme.validate(email, { abortEarly: false });
  };

  const onFocus = () => {
    setErrorList([])
  }


  return (
    <>
      <Navbar />
      {car === null ? <div className='d-flex mt-5 align-items-center justify-content-center'>
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
      </div> : <>
        < section id='car-details' >
          <div className="container">
            <div className="thumbnails-container">
              <ImageGallery
                items={car.data?.images.map(item => ({ original: item.url, thumbnail: item.url }))}
                lazyLoad={true}
                loading="lazy"
                thumbnailLoading="lazy"
                showBullets={true}
              />

            </div>
            <div className="car-info">
              <div className="car-model">
                <div className="car-model-inner">
                  <div className="brand">
                    <h3>{car.data?.car_brand}</h3>
                  </div>
                  <div className="model">
                    <h3>{car.data?.car_model}</h3>
                  </div>
                  <div className="year">
                    <h3>Model year</h3>
                    <span>{car.data?.model_year}</span>
                  </div>

                  <div className="price">
                    <h3>Price range</h3>
                    <span>{car.data?.range_price} &euro;</span>
                  </div>
                </div>
              </div>
              <div className="engine-container">
                <div className="icons-container">
                  <ArrowDir />
                  <img src={hourse} alt="" />
                  <RiGasStationFill className='gas' />
                </div>
                <div className="engine-info">
                  <div className="inner">
                    <div className="info">
                      <h3 className='h6'>{car.data?.engine}</h3>
                    </div>
                    <div className="info">
                      <h3 className='h6'>{car.data?.power}HP</h3>

                    </div>
                    <div className="info">
                      <h3 className='h6'>{car.data?.fuel_type}</h3>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ section>
      </>}



      <section id='contact-us'>
        <div className="container">
          <div className="title-container">
            <h4 className='h2'>For Registration</h4>
          </div>

          <div className="reg">
            <div className="call-btn">
              <h4>Call us</h4>
              <p>to know more details</p>
              <button>
                <a href={`tel:+(20)${contacts?.data[0]?.number}`}>
                  <Phone />
                  Call Us On {contacts?.data[0]?.number}
                </a>
              </button>
            </div>

            <div className="client-email">
              <div className="title">
                {isEmailSent === true ? (<>
                  <h4 className='h5'>
                    Thank your for subscribe,</h4>
                  <p>we will Contact with You Soon</p>
                </>) : (
                  <>
                    <h4 className='h5'>
                      Leave your Email </h4>
                    <p>and we will contact you</p>
                  </>)}

                {errorList.map((error, idx) => (
                  <div key={idx}>
                    {error.path[0] === 'email' && error.type === 'string.empty' && <div ref={errRef} className='alert p-2 alert-danger'>Email is not allowed to be empty"</div>}
                    {error.path[0] === 'email' && error.type === 'string.email' && <div ref={errRef} className='alert p-2 alert-danger'>Email is not valid</div>}
                  </div>
                ))}
              </div>
              <form action="" onSubmit={submitForm}>
                <input
                  name='email'
                  onFocus={onFocus}
                  onChange={getEmail}
                  type="email" placeholder='example@gmail.com' />

                <button type='submit'>Send</button>
              </form>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CarDetails





