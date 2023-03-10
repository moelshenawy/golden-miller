import './index.scss'
import Navbar from './../Navbar/index';
import Footer from './../Footer/index';
import imgs from '../../assets/constants/imgs'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useContext, useEffect } from "react";
import { appContext } from '../../Context/Store';
import { AnimatedDiv } from '../Animated';

const Company = () => {
  const { comp0 } = imgs;
  const { ourTeam, contacts } = useContext(appContext)




  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3
        }
      })
    }

    if (!inView) {
      animation.start({ x: '-100vw' })
    }

  }, [inView]);


  console.log()
  return (
    <>
      <Navbar />
      <>
        <section id='company'>
          <div className="container" >
            <header >
              <AnimatedDiv
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}

                className="text-container" >
                <h1 className='h2'>
                  GOLDEN MILLER
                </h1>
                <p className='desc'>THE WINNERS' CHOICE</p>
              </AnimatedDiv>

              <div className="right-layer" />
              <div className="left-layer" />
            </header>

            <section id='services'>
              <div className="title">
                <h1 className='h3'>
                  Services
                </h1>
                <p>What We Offer?</p>
              </div>
              <div className="boxes-container">

                <div className="box">
                  <div className="title">Full Service</div>
                  <div className="desc">
                    <p>fully responsible for bringing your car from Europe to your doorstep.</p>
                  </div>
                </div>
                <div className="box">
                  <div className="title">Euro Service</div>
                  <div className="desc">
                    <p>Choose and buy and shipping the suitable car for you from anywhere in Europe.</p>
                  </div>
                </div>
                <div className="box">
                  <div className="title">Consultation</div>
                  <div className="desc">
                    <p>Ask for anything related to cars and one of our special representatives will be with you anytime.</p>
                  </div>
                </div>
              </div>

            </section>

            <section id='contact' className="about" ref={ref}>
              <AnimatedDiv
                animate={animation}

              >
                <div className="about-text">
                  <div className="title">It???s time to <br />
                    experience <br />
                    luxury.</div>

                  <div className="info">
                    <p>Head Office : <span>{contacts?.data[0]?.address}</span> </p>
                    <p>Email : <span>{contacts?.data[0]?.email}</span> </p>
                    <p>Mobile Number : <span> (+20){contacts?.data[0]?.number}</span> </p>
                  </div>
                </div>
              </AnimatedDiv>

              <div className="about-img">

                <div className="layer" />
                <img src={comp0} alt="" />
              </div>
            </section>

            <section id='team' >
              <div className="title">
                <h2 className='text-center'>Our Team</h2>
              </div>
              <div className="box-container">
                <div className="row">
                  <div className="col" >
                    <div className="box">
                      <div className="img-container">
                        <img src={ourTeam?.data[0]?.image} alt={ourTeam?.data[0]?.name} />
                      </div>
                      <div className="name">
                        <h5>{
                          ourTeam !== null &&
                          ourTeam.data[0]?.name}</h5>
                      </div>
                      <div className="job">
                        <h6>{
                          ourTeam !== null &&
                          ourTeam.data[0]?.job_title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {ourTeam?.data.slice(1).map((team, index) => (
                    <div className="col-sm-12 col-md-4 col-lg-3 box-container" key={index}>
                      <div className="box">
                        <div className="img-container">
                          <img src={team.image} alt={team.name} />
                        </div>
                        <div className="name">
                          <h5>{team.name}</h5>
                        </div>
                        <div className="job">
                          <h6>{team.job_title}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </section>
          </div>
        </section>
      </>
      <Footer />
    </>
  )
}

export default Company