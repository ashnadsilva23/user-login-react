import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {

    const [data, changeData] = useState([

        {
           
            "userName": "",
            "passward": ""




        }

    ])



    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue = () => {
        console.log(data)
        // axios.post("http://localhost:8086/add", data).then(
        //     (response) => {
        //         console.log(response.data)
        //         if (response.data.status == "success") {
        //             alert("successfully added")
        //         }
        //         else {
        //             alert("failed")
        //         }
        //     }
        // ).catch().finally()
    }
    return (
        <div>

            {/* <Navbar /> */}
            <h1 align="center"><u>Login</u></h1>
            <div className="container">
                <div className="card" >

                    <div class="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label><br></br>
                                        <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='passward' value={data.passward} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>Login</button><br></br><br></br>

                                        <p>new users click to register <Link to="/add">sign up</Link></p>
                                                                    
                                          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login