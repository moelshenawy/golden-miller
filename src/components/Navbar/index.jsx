import "./index.scss"
import { Link } from 'react-router-dom'
import imgs from '../../assets/constants/imgs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { appContext } from '../../Context/Store';
import { useContext } from "react";


const Navbar = () => {
  const { logo, logo1 } = imgs;
  const { userData, logOut } = useContext(appContext);

  const navbarLinks = [
    { title: "Home", path: "/" },
    { title: "Company Profile", path: "/companyprofile" },
    { title: "Car Tracking", path: "/cartracking" },
  ]

  return (
    <nav id="navbar" className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <div className="logo ">
          <Link to="/">
            <img className="navbar-brand" src={logo1} alt='golden-miller' />
            <img className="navbar-brand" src={logo} alt='golden-miller' />
          </Link>
        </div>

        <button
          className="burger-btn navbar-toggler text-secondary "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>

        <div className="collapse navbar-collapse " id="main">
          <div className="links-container">

            <div className="links m-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navbarLinks.map((link, index) => (
                  <li key={index} className={`nav-item ${link.path === window.location.pathname ? "active" : ""}`}>
                    <Link to={`${link.path}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>

            </div>

            <div className="auth-methods d-flex align-items-center justify-content-between " >

              {userData === null ?
                <>
                  <div className="reg-btn me-3">
                    <Link to="/register">
                      <button>
                        Sign Up
                      </button>
                    </Link>
                  </div>

                  <div className="login-btn">
                    <Link to="/login">
                      <button>
                        Login
                      </button>
                    </Link>
                  </div>
                </>
                : <>
                  <div className="username">
                    <h6>{userData?.first_name}</h6>
                  </div>
                  <div className="logout-btn" onClick={logOut}>
                    <Link to='/login' >
                      <button>
                        Sign Out
                      </button>
                    </Link>

                  </div>
                </>}



            </div>
          </div>
        </div>


      </div>
    </nav>
  )
}

export default Navbar