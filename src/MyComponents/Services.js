import { buildQueries } from '@testing-library/react'
import React from 'react';


export const Services = () => {


  let serviceForm = {
    width: "50%",
    marginLeft: "50vh",
    marginTop: "10vh",

  }
  return (

    <form style={serviceForm}>
      <p className="text-center " style={{ fontWeight: "bold", color: "darkblue" }}>Please Register to Get Services</p>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}
