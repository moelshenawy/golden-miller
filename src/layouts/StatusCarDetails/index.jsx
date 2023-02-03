import './index.scss';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const StatusCarDetails = ({ carStatus }) => {

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
                items={carStatus.data[0]?.car.images.map(item => ({ original: item.url, thumbnail: item.url }))} lazyLoad={true}
                loading="lazy"
                thumbnailLoading="lazy"
                showBullets={true}
              />

            </div>
            <div className="info-container">
              <div className="info-inner">
                <div className="car-brand d-flex">
                  <h3>Brand</h3>
                  <h3 className='h6'>{carStatus.data[0]?.car.car_brand}</h3>
                </div>
                <div className="car-model">
                  <h3 className='h6'>M4 GTS</h3>
                  <h3 className='h6'>{carStatus.data[0]?.car.car_}</h3>
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
            <h1>Current status</h1>
          </div>

          <table className="table table-responsive">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Day</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
              <tr className='space'></tr>

            </thead>
            <tbody>
              <tr>
                <th scope="row">{carStatus.data[0]?.status_day}</th>
                <td>{carStatus.data[0]?.status_date}</td>
                <td>{carStatus.data[0]?.status}</td>
              </tr>


            </tbody>
          </table>

        </div>
      </section>
    </>

  )
}

export default StatusCarDetails