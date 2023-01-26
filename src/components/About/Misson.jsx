
import { useEffect, } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import imgs from '../../assets/constants/imgs'


const Misson = () => {
  const { mission } = imgs;
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 })

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
      <div className="mission-section" ref={ref}>

        <motion.div
          animate={animation}
        // whileInView={{ opacity: [0, 1] }}
        >


          <div className="text-content" >
            <div className="title">

              <h3>OUR <br /> MISSION</h3>

            </div>
            <div className="line" />
            <div className="desc">
              <p>Our mission is to provide an experience of <br /> excellence to our customers. The trust of our <br /> customers is what drives us every day to <br /> deliver an exquisitely fast, fluid, and luxurious <br /> experience.</p>
            </div>
          </div>
        </motion.div>

        <div className="img-container">
          <img src={mission} alt="mission" />
        </div>


      </div>
    </>
  )
}

export default Misson