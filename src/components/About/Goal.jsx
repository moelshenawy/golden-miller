
import { useEffect, } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import imgs from '../../assets/constants/imgs'


const Goal = () => {
  const { goal } = imgs;
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
      <div className="goal-section" ref={ref}>
        <motion.div
          animate={animation}
        >
          <div className="text-content">
            <div className="title">
              <h3>OUR <br /> GOAL</h3>
            </div>
            <div className="line" />
            <div className="desc">
              <p>Our goal is to always commit to our pledge <br /> to provide our clients with a unique  <br /> experience of fidelity.</p>
            </div>
          </div>
        </motion.div>
        <div className="img-container">
          <img src={goal} alt="goal" />
        </div>
      </div>
    </>
  )
}

export default Goal