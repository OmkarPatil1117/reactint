import React from 'react'

const Login = () => {
  return ( 
    // created simple form ui using bootsrap
    <div id='login' >
    <form style={{ width : "38rem" }}>
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="htmlForm-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Login