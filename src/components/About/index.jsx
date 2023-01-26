import './index.scss';
import Misson from './Misson';
import Vision from './Vision';
import Goal from './Goal';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="sections-container " >
          <Misson />
          <Vision />
          <Goal />
        </div>
      </div>
    </section>
  )
}

export default About
