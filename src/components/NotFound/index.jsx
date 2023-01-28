import './index.scss'
import Navbar from './../Navbar/index';
import imgs from '../../assets/constants/imgs'

const NotFound = () => {
  const { NotFound } = imgs;

  return (
    <>
      <Navbar />

      <div id='not-found'>
        <div className="container">

          <div className="not-found-inner">

            <div className="num4-l">
              <h1>4</h1>
            </div>

            <div className="img-container">
              <img src={NotFound} alt="" />
            </div>

            <div className="num4-r">
              <h1>4</h1>
            </div>
          </div>


          <div className="text-container">
            <div className="reason">
              <p>There’s Nothing here ...</p>
            </div>
            <div className="desc"><p>maybe the page you’re looking for is not found or never existed</p></div>
          </div>


        </div>


      </div>
    </>
  )
}

export default NotFound