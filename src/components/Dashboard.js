import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='Dashboard' >
        <div className='mainDashboard'>
        <h1>Real Esate Made Real Easy</h1> <br></br>

    <form className="d-flex" id='mainInp' role="search">
        <input className="form-control me-2" id='inputM' type="search" placeholder="Search by BHK 2 for sale in Banglore" aria-label="Search"  />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Dashboard