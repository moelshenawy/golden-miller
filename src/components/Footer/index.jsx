import './index.scss'
import { Facebook, Instagram, } from '../../assets/svgs/'
import { Link } from 'react-router-dom';
import imgs from '../../assets/constants/imgs'
import { AnimatedDiv } from '../Animated';


const Footer = () => {
  const { logo, logo1 } = imgs;

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
                        <li>
                          <Link to='www.facebook.com'>
                            <Facebook /></Link>
                        </li>
                        <li><Link to='www.facebook.com'>
                          <Instagram />
                        </Link></li>
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
                        <li>Address :  23 Abd Al Razek Al <br /> Sanhouri, Al Manteqah as <br /> Sadesah,  Nasr City, Cairo </li>
                        <li>Email : info@goldenmiller.com</li>
                        <li>Mobile Number : +200100000000</li>
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
                        <li>Working days: From Saturday to Thursday
                        </li>
                        <li>VAT ID: 704-354-144</li>
                        <li>Company Registration NO.: 35281</li>
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
