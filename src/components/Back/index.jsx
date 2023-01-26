import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <div id='back-btn' >
      <Link to='/'>
        <IoIosArrowBack /> Back
      </Link>
    </div>
  )
}

export default Back  