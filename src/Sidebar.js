import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='row'>
      <div className='col'>
      <nav class="nav flex-column bg-info w-25 vh-100 d-none d-md-block">
  <a class="nav-link active" to="#">Active</a>
  <a class="nav-link" to="#">Link</a>
  <a class="nav-link" to="#">Link</a>
  {/* <a class="nav-link disabled" to="#">Disabled</a> */}
</nav>
      </div>
    </div>
  )
}

export default Sidebar