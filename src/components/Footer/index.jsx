import './index.scss'
import { Link } from 'react-router-dom';
import imgs from '../../assets/constants/imgs'
import { AnimatedDiv } from '../Animated';
import { useContext } from 'react';
import { appContext } from '../../Context/Store';
const Footer = () => {
  const { logo, logo1 } = imgs;
  const { allLinks, contacts } = useContext(appContext)
  return (
    <>
      <section id='footer'>
        <AnimatedDiv whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="box">
                    <div className="img-container d-flex">
                      <Link to="/">
                        <img className="navbar-brand" src={logo1} alt='golden-miller' />
                        <img className="navbar-brand" src={logo} alt='golden-miller' />
                      </Link>
                    </div>
                    <div className="follow">
                      <div className="title">Follow Us</div>
                      <ul className='follow-links'>
                        {
                          allLinks !== null && (
                            allLinks.map((link, idx) => (
                              <li key={idx}>
                                <a href={link.value} target="_blank">
                                  <img src={link.image} alt="" />
                                </a>
                              </li>

                            )
                            ))}


                      </ul>

                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="box">
                    <div className="contact">
                      <div className="title">
                        Contact Info
                      </div>
                      <ul className='contact-links'>
                        <li>Address :  {contacts?.data[0]?.address} </li>
                        <li>Email : {contacts?.data[0]?.email} </li>
                        <li>Mobile Number : (+20){contacts?.data[0]?.number} </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="box">

                    <div className="services">
                      <div className="title">
                        <h3>Services</h3>
                      </div>
                      <ul className='services-links'>
                        <li>Working days : From Saturday to Thursday
                        </li>
                        <li>VAT ID : 704-354-144</li>
                        <li>Company Registration NO : 35281</li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </AnimatedDiv>
      </section>
    </>
  )
}

export default Footer
