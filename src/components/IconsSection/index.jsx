import './index.scss';
import { Speed, CarMeter, Diamond, Dir } from '../../assets/svgs/'
import { AnimatedDiv } from '../Animated';

const IconsSection = () => {
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
                  <CarMeter />
                </div>
                <div className="title">
                  <h6>Speed</h6>
                </div>
              </div>
              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <Speed />
                </div>
                <div className="title">
                  <h6>Power</h6>
                </div>
              </div>



              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <Dir />
                </div>
                <div className="title">
                  <h6>Fluidity</h6>
                </div>
              </div>
              <div className="box">
                <div className="icon-container">
                  <div className="layer">
                  </div>
                  <Diamond />
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
