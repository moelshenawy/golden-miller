import './index.scss'
import { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Back from './../Back/index';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const [showConfPass, setShowConfPass] = useState(false)


  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
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
      <div id='register'>
        <div className="container" ref={ref}>
          <div className="back-container container">
            <Back />
          </div>
          <motion.div
            animate={animation}
            className="reg-card">

            <div className="card-inner">
              <div className="title">
                <h1 className='h6'>Sign up</h1>
              </div>
              <form action="">
                <div className="f-name">
                  <label htmlFor="">First name*</label>
                  <input type="text" placeholder='John' />
                </div>

                <div className="l-name">
                  <label htmlFor="">Last name*</label>
                  <input type="text" placeholder='Doe' />
                </div>

                <div className="email">
                  <label htmlFor="">Email*</label>
                  <input type="email" placeholder='john.doe@gmail.com' />
                </div>

                <div className="password">
                  <label htmlFor="">Password*</label>
                  <input type={`${showPass ? "text" : "password"}`} placeholder='***********' />
                  <div className="icon-container" onClick={() => setShowPass((prev) => !prev)}>
                    {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>

                <div className="conf-password">
                  <label htmlFor="">Confirm password*</label>
                  <input type={`${showConfPass ? "text" : "password"}`} placeholder='***********' />
                  <div className="icon-container" onClick={() => setShowConfPass((prev) => !prev)}>
                    {showConfPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>
                </div>

                <div className="sub-btn">
                  <button type='submit'>Sign up</button>
                </div>

              </form>

              <div className="login">
                <Link to='/login'>
                  Already have an account?
                </Link>
                <p>Login with the data you entered during your registration</p>
                <div className="login-btn">
                  <Link to='/login'>
                    <button>Login</button>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </>

  )
}

export default Register