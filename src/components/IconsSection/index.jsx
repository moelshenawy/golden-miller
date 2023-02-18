import './index.scss';
import { AnimatedDiv } from '../Animated';
import { imgs } from '../../assets/constants'

const IconsSection = () => {
  const { carmeter, speed, dir, diamond } = imgs
  return (
    <>
      <section id='icons-section'>
        <AnimatedDiv
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="container">
            <div className="box-container">


              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <img src={carmeter} alt="Speed" />
                </div>
                <div className="title">
                  <h6>Speed</h6>
                </div>
              </div>
              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <img src={speed} alt="Power" />
                </div>
                <div className="title">
                  <h6>Power</h6>
                </div>
              </div>



              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <img src={dir} alt="Fluidity" />
                </div>
                <div className="title">
                  <h6>Fluidity</h6>
                </div>
              </div>
              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <img src={diamond} alt="Luxury" />
                </div>
                <div className="title">
                  <h6>Luxury</h6>
                </div>
              </div>

            </div>
          </div>
        </AnimatedDiv>

      </section>
    </>
  )
}

export default IconsSection
