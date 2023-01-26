import './index.scss'
import { useEffect, } from 'react';
import imgs from '../../assets/constants/imgs'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { heroCar, ipad } = imgs;

  const { ref, inView } = useInView({ threshold: 0.2 })
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3

        }
      })
    }

    if (!inView) {
      animation.start({ x: '-100vw' })
    }

  }, [inView]);



  return (
    <>
      <section id='hero' ref={ref}>
        <motion.div
          animate={animation}

        >
          <div className="container">
            <div className="hero-desc">
              <div className="head">
                <h2>Discover</h2>
              </div>
              <div className="title">
                <h1>GOLDEN MILLER</h1>
              </div>
              <div className="desc">
                <p>Golden Miller is an importing cars service that provides a fast paced service.
                </p>
                <span>
                  The chosen name, Golden Miller, was a racehorse who is the most successful Cheltenham Gold Cup horse ever.
                </span>
              </div>
            </div>

          </div>
        </motion.div>
        <div className="main-hero-bg">
          <div className="img-layer-top" />
          <div className="img-layer-bottom" />
          <div className="img-layer-left" />
          <div className="img-layer-gold" />
          <img className='desktop' src={heroCar} alt="" />
          <img className='ipad' src={ipad} alt="" />
        </div>


      </section>
    </>
  )
}

export default Hero





