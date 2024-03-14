import React from 'react'
import './cards.css'

function Cards() {
  return (
    <>
    <div className="card-one">
      <div className="one">
          <h2>Join the UltraEdit newsletter</h2>
          <p>Sign up for our newsletter and receive emails for the latest news, blogs, and special deals on UltraEdit.</p>
        </div>
        <div className="form">
          <h2>Subscribe to our emails</h2><label htmlFor="for">Enter email address</label><form action="">
          <input type="email"  placeholder='Enter Emailid' id='for'/><div></div>
          <button>Sign up</button>
        </form></div>
    </div>
    <div className="card-two">
        <div className='one-line'>
          <h1>EXE or MSI?</h1>
          <h2>The EXE builds of our products are the preferred download for most of our users, running Windows 8.1 and later.
  
            We make MSI builds available for bulk or silent deployments (command line, GPO, SCCM, etc.).<span> Get the UltraEdit MSI installer.</span></h2>
          <h1>Free trial period</h1>
          <h2>
            This application comes with a free, fully functional 30 day trial period. After the trial period expires, you must <span>purchase a license</span> to continue using it.
          </h2>
        </div>
    </div>
    </>
  )
}

export default Cards