
import { useEffect, } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import imgs from '../../assets/constants/imgs'


const Vision = () => {
  const { vision } = imgs;
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
      animation.start({ x: '100vw' })
    }

  }, [inView]);
  return (
    <>
      <div className="vision-section" ref={ref}>
        <motion.div
          animate={animation}
        >
          <div className="text-content">
            <div className="title">

              <h3>OUR <br /> VISION</h3>

            </div>
            <div className="line" />
            <div className="desc">
              <p>Our vision for the future is to be pioneers in <br /> the field of importing cars through our <br /> commitment to perform our services to the <br /> fullest.</p>
            </div>

          </div>
        </motion.div>

        <div className="img-container">
          <img src={vision} alt="vision" />
        </div>
      </div>
    </>
  )
}

export default Vision