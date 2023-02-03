import { useContext, useEffect, useRef, useState } from 'react';
import './index.scss'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';
import Back from './../Back/index';
import { appContext } from '../../Context/Store';
import axios from "axios";
import Joi from "joi";
import Spinner from "react-bootstrap/Spinner";
import { AnimatedDiv } from '../Animated';

const Login = () => {
  const [showPass, setShowPass] = useState(true)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorList, setErrorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { baseURL, saveUserData } = useContext(appContext);

  const navigate = useNavigate();

  const errRef = useRef();




  const getUser = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);

  };



  const submitForm = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let validationRes = validationForm();
    // Check if Input is valid
    if (validationRes.error) {
      // push error to error List Array
      setErrorList(validationRes.error.details);

      setIsLoading(false);
    } else {
      setIsLoading(true);

      // Send data to api
      const { data } = await axios.post(
        `${baseURL}/client/login`,
        user
      ).catch(function (err) {

        if (err.response) {
          setIsLoading(false);
          setError(err.response.data.message)
        }
      })

      if (data.code === 200) {
        localStorage.setItem('userInfo', JSON.stringify(data.data.user));
        localStorage.setItem('userToken', JSON.stringify(data.data.token));

        saveUserData();

        // TODOS: navigate user to login
        navigate("/");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(data.message);
      }
    }
  };


  const validationForm = () => {
    let scheme = Joi.object({
      password: Joi.string()
        .pattern(new RegExp("(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$"))
        .required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "net", "org"] } })
        .required(),

    });

    return scheme.validate(user, { abortEarly: false });
  };

  const onFocus = () => {
    setErrorList([])
  }



  // Animation
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
      <div id='login'>
        <div className="container" ref={ref}>
          <div className="back-container container">
            <Back />
          </div>

          <AnimatedDiv
            animate={animation}
            className="login-card">
            <div className="card-inner">
              <div className="title">
                <h1 className='h6'>Login</h1>
              </div>
              <form action="" onSubmit={submitForm}>
                <div className="email">
                  <label htmlFor="email">Email*</label>
                  <input
                    onChange={getUser}
                    onFocus={onFocus}
                    type="email" name='email' placeholder='john.doe@gmail.com' />
                  {errorList.map((error, idx) => (
                    <div key={idx}>
                      {error.path[0] === 'email' && error.type === 'string.empty' && <div ref={errRef} className='alert p-2 alert-danger'>Email is not allowed to be empty"</div>}
                      {error.path[0] === 'email' && error.type === 'string.email' && <div ref={errRef} className='alert p-2 alert-danger'>Email is not valid</div>}
                    </div>
                  ))}
                </div>

                <div className="password">
                  <label htmlFor="password">Password*</label>
                  <input name='password'
                    onChange={getUser}
                    onFocus={onFocus}
                    type={`${showPass ? "text" : "password"}`} placeholder='***********' />
                  <div className="icon-container" onClick={() => setShowPass((prev) => !prev)}>
                    {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>


                  {errorList.map((error, idx) => (
                    <div key={idx}>
                      {error.path[0] === 'password' && error.type === 'string.empty' && (
                        <>
                          <div
                            ref={errRef} className='alert p-2 alert-danger'>Password is not allowed to be empty</div>
                        </>
                      )}

                      {(error.type === `string.pattern.base`) && (<div key={idx} className='alert p-2 alert-danger'><ul>
                        <li>Password Must have at least one lowercase ('a'-'z').</li>
                        <li>Password Must have at least one uppercase ('A'-'Z').</li>
                        <li>Password Must have at least one number ('0'-'9').</li>
                        <li>Password Must have at least 8 characters long.</li>
                      </ul>
                      </div>)}


                    </div>
                  ))}
                </div>


                <div className="log-btn">
                  <button type='submit'>

                    {isLoading ? (
                      <Spinner animation="border" role="status" />
                    ) : (
                      "Login"
                    )}

                  </button>
                </div>


              </form>
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="register">
                <Link to='/register'>
                  Not Registered Yet?
                </Link>
                <p>Login with the data you entered during your registration</p>
                <div className="login-btn">
                  <Link to='/register'>
                    <button>Create an account</button>
                  </Link>
                </div>
              </div>

            </div>

          </AnimatedDiv>
        </div>
      </div>
    </>
  )
}

export default Login