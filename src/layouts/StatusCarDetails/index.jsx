import './index.scss';
import imgs from '../../assets/constants/imgs'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { RiGasStationFill } from 'react-icons/ri'

const StatusCarDetails = () => {
  const { carStatus, thumb1, thumb0, hourse, i1, i5, i6 } = imgs;
  const images = [
    {
      original: carStatus,
      thumbnail: carStatus,
    },

    {
      original: i1,
      thumbnail: i1,
    },

    {
      original: i5,
      thumbnail: i5,
    },
    {
      original: i6,
      thumbnail: i6,
    },
    {
      original: thumb1,
      thumbnail: thumb1,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
    {
      original: thumb0,
      thumbnail: thumb0,
    },
  ];




  return (
    <>
      <section id='car-status'>
        <div className="container">
          <div className="title">
            <h2 className='h1'>Car Details</h2>
          </div>

          <div className="car-details-container">
            <div className="thumbnails-container">
              <ImageGallery
                items={images}
                lazyLoad={true}
                loading="lazy"
                thumbnailLoading="lazy"
                showBullets={true}
              />

            </div>
            <div className="info-container">
              <div className="info-inner">
                <div className="car-brand">
                  <h3 className='h6'>Mercedes</h3>
                </div>
                <div className="car-model">
                  <h3 className='h6'>M4 GTS</h3>
                </div>
                <div className="car-year">
                  <h3 className='h6'>Model year</h3>
                  <span>2022</span>
                </div>



              </div>
            </div>
          </div>

        </div>
      </section>

      <section id='status-history'>
        <div className="container">
          <div className="title">
            <h1>Status History</h1>
          </div>

          <table className="table table-responsive">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Status</th>
              </tr>
              <tr className='space'></tr>

            </thead>
            <tbody>
              <tr>
                <th scope="row">Saturday</th>
                <td>11/5/2023</td>
                <td>11:25 am</td>
                <td>Reserved</td>
              </tr>

              <tr>
                <th scope="row">Monday</th>
                <td>11/5/2023</td>
                <td>11:25 am</td>
                <td>Payed</td>
              </tr>
              <tr>
                <th scope="row">Sunday</th>
                <td>11/5/2023</td>
                <td>11:25 am</td>
                <td>Packed Up</td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>
    </>

  )
}

export default StatusCarDetails