import './index.scss'
import { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Back from './../Back/index';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import axios from "axios";
import Joi from "joi";
import { appContext } from "../../Context/Store";
import Spinner from "react-bootstrap/Spinner";

const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
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
        `${baseURL}/client/register`,
        user
      ).catch(function (err) {

        if (err.response) {
          setIsLoading(false);
          setError(err.response.data.message)
        }
      })
      console.log(data)
      if (data.code === 200) {
        localStorage.setItem('userInfo', JSON.stringify(data.data.user));
        saveUserData();
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
      first_name: Joi.string().min(3).max(8).required().strict().trim(),
      last_name: Joi.string().min(3).max(8).required().strict().trim(),
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
    setError([])

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
              <form action="" onSubmit={submitForm}>
                <div className="f-name">
                  <label htmlFor="first_name">First name*</label>
                  <input
                    onChange={getUser}
                    onFocus={onFocus}
                    type="text"
                    name='first_name' placeholder='John' />

                  {errorList.map((error, idx) => (
                    <>
                      {error.path[0] === 'first_name' && error.type === "string.empty" && <div ref={errRef} key={idx} className='alert p-2 alert-danger'>First name* is not allowed to be empty</div>}
                      {error.path[0] === 'first_name' && error.type === "string.min" && <div ref={errRef} key={idx} className='alert p-2 alert-danger'>First name* must be at least 3 characters long</div>}
                      {error.path[0] === 'first_name' && error.type === "string.max" && <div ref={errRef} key={idx} className='alert p-2 alert-danger'>First name* must be less than or equal to 8 characters long </div>}
                    </>
                  ))}

                </div>

                <div className="l-name">
                  <label htmlFor="last_name">Last name*</label>
                  <input type="text" name='last_name' placeholder='Doe'
                    onChange={getUser}
                    onFocus={onFocus}
                  />

                  {errorList.map((error, idx) => (
                    <>
                      {error.path[0] === 'last_name' && error.type === "string.empty" && <div ref={errRef} key={idx} className='alert p-2 alert-danger'>Last name* is not allowed to be empty</div>}
                      {error.path[0] === 'last_name' && error.type === "string.min" && <div ref={errRef} key={idx} className='alert p-2 alert-danger'>Last name* must be at least 3 characters long</div>}
                      {error.path[0] === 'last_name' && error.type === "string.max" && <div ref={errRef} key={idx} className='alert p-2 alert-danger'>Last name* must be less than or equal to 8 characters long </div>}
                    </>
                  ))}

                </div>

                <div className="email">
                  <label htmlFor="email">Email*</label>
                  <input
                    onChange={getUser}
                    onFocus={onFocus}
                    type="email" placeholder='john.doe@gmail.com' name='email' />

                  {errorList.map((error, idx) => (
                    <>
                      {error.path[0] === 'email' && error.type === 'string.empty' && <div ref={ref} key={idx} className='alert p-2 alert-danger'>Email is not allowed to be empty"</div>}
                      {error.path[0] === 'email' && error.type === 'string.email' && <div ref={ref} key={idx} className='alert p-2 alert-danger'>Email is not valid</div>}
                    </>
                  ))}

                </div>

                <div className="password">
                  <label htmlFor="password">Password*</label>
                  <input
                    onChange={getUser}
                    onFocus={onFocus}
                    type={`${showPass ? "text" : "password"}`} name='password' placeholder='***********' />
                  <div className="icon-container" onClick={() => setShowPass((prev) => !prev)}>
                    {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </div>

                  {errorList.map((error, idx) => (
                    <>
                      {error.path[0] === 'password' && error.type === 'string.empty' && (
                        <>
                          <div
                            ref={ref} key={idx} className='alert p-2 alert-danger'>Password is not allowed to be empty</div>
                        </>
                      )}



                      {(error.type === `string.pattern.base`) && (<div key={idx} className='alert p-2 alert-danger'><ul>
                        <li>Password Must have at least one lowercase ('a'-'z').</li>
                        <li>Password Must have at least one uppercase ('A'-'Z').</li>
                        <li>Password Must have at least one number ('0'-'9').</li>
                        <li>Password Must have at least 8 characters long.</li>
                      </ul>
                      </div>)}
                    </>
                  ))}
                </div>


                <div className="sub-btn">
                  <button type='submit'>
                    {isLoading ? (
                      <Spinner animation="border" role="status" />
                    ) : (
                      "Sign up"
                    )}



                  </button>
                </div>

              </form>

              {error && error.length !== -1 && <div className="alert alert-danger">{error}</div>}
              {console.log(error)}

              <div className="login">
                <Link to='/login'>
                  Already have an account?
                </Link>
                <p>Register now to post, edit, and manage ads. It’s quick, easy, and free!</p>
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