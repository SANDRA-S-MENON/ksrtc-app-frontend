import React from 'react'

const LogIn = () => {
  return (
    <div>
          <h1><center>log in</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">emailid</label>
                    <input type="email" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control" />
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <br /> <button className="btn btn-success">log in</button>
                   <br /><br /><a href="">click here to sign in!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn