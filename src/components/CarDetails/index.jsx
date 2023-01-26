import './index.scss'
import Navbar from './../Navbar/index';
import Footer from './../Footer/index';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imgs from '../../assets/constants/imgs'
import ImageGallery from 'react-image-gallery';
import { ArrowLeft, ArrowRight, ArrowDir, Phone } from '../../assets/svgs/'
import "react-image-gallery/styles/css/image-gallery.css";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const params = useParams();
  const { carStatus, thumb1, thumb0, hourse, i1, i2, i3, i5, i6 } = imgs;

  const getCar = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/trending/${id}`);
    setCar(data);
  };

  useEffect(() => {
    getCar(params.id)
  }, []);

  const images = [
    {
      original: carStatus,
      thumbnail: carStatus,
    },

    {
      original: i1,
      thumbnail: i1,
    },

    {
      original: i5,
      thumbnail: i5,
    },
    {
      original: i6,
      thumbnail: i6,
    },
    {
      original: thumb1,
      thumbnail: thumb1,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
  ];


  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowLeft size={30} color="#000" />
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <ArrowRight size={30} color="#000" />
      </button>
    );
  }


  return (
    <>
      <Navbar />
      < section id='car-details' >
        <div className="container">
          <div className="thumbnails-container">
            <ImageGallery
              items={images}
              lazyLoad={true}
              renderLeftNav={renderLeftNav}
              renderRightNav={renderRightNav}
              loading="lazy"
              thumbnailLoading="lazy"
              showBullets={true}
            />

          </div>
          <div className="car-info">
            <div className="car-model">
              <div className="car-model-inner">
                <div className="brand">
                  <h3>Mercedes</h3>
                </div>
                <div className="model">
                  <h3>M4 GTS</h3>
                </div>
                <div className="year">
                  <h3>Model year</h3>
                  <span>2022</span>
                </div>
                <div className="acceleration">
                  <h3>Acceleration</h3>
                  <span>44x43</span>
                </div>
                <div className="price">
                  <h3>Price</h3>
                  <span>2000 $</span>
                </div>
              </div>
            </div>
            <div className="engine-container">
              <div className="icons-container">
                <ArrowDir />
                <img src={hourse} alt="" />
                <div className="from-to">0-100</div>
              </div>
              <div className="engine-info">
                <div className="inner">
                  <div className="info">
                    <h3 className='h6'>1.3-LITER</h3>
                    <span>Turbo</span>
                  </div>
                  <div className="info">
                    <h3 className='h6'>163 HP</h3>

                  </div>
                  <div className="info">
                    <h3 className='h6'>8.7 SEC</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ section>

      <section id='contact-us'>
        <div className="container">
          <div className="reg">
            <div className="title">
              <h4 className='h2'>For Registration</h4>
            </div>
            <div className="call-btn">
              <button>
                <a href="tel:+(20)1000000000">
                  <Phone />
                  Call Us On 01000000000
                </a>
              </button>
            </div>
            <div className="or">Or</div>
            <div className="client-number">
              <div className="title">
                <h4 className='h5'>Leave your Number and we will contact you</h4>
              </div>
              <input type="text" placeholder='Leave your number' />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CarDetails





