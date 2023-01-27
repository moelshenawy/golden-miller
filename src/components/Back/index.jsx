import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';
import './index.scss'
const Back = () => {
  return (
    <>

      <div id='back-btn' >
        <Link to='/'>
          <IoIosArrowBack />
        </Link>
      </div>
    </>
  )
}

export default Back  