import { useEffect, useState } from 'react';
import './index.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Back from './../Back/index';

const Login = () => {
  const [showPass, setShowPass] = useState(true)


  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3
        }
      })
    }

    if (!inView) {
      animation.start({ y: '-100vh' })
    }

  }, [inView]);
  return (
    <>
      <div id='login'>
        <div className="container" ref={ref}>
          <motion.div
            animate={animation}
            className="reg-card">
            <div className="card-inner">
              <div className="title">
                <h1 className='h6'>Sign up</h1>
              </div>
              <form action="">

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


                <div className="log-btn">
                  <button type='submit'>Login</button>
                </div>
              </form>

              <div className="register">

                <Link to='/register'>
                  Not Registered Yet?
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
          <Back />
        </div>
      </div>
    </>
  )
}

export default Login