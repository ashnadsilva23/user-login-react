import React, {  useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddUser = () => {
    const [data, changeData] = useState([

        {
            "name": "",
            "dob": "",
            "bloodGroup": "",
            "mobileNo": "",
            "address": "",
            "pincode": "",
            "district": "",
            "place": "",
            "email": "",
            "userName": "",
            "passward": "",
            "confirmpswd":""



        }

    ])
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8086/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                }
                else {
                    alert("failed")
                }
            }
        ).catch().finally()
    }
    // const confirmPassword = (data)=>{
    //     if(data.passward!=data.confirmpswd)
           
    //         {
    //             alert("incorrect password")
    //         }
    // }
    return (
        <div>
            {/* <Navbar /> */}
            <h1 align="center"><u>Sign Up</u></h1>
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date of Birth</label>
                                        <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Blood group</label>
                                        <select id="" className="form-control" name='bloodGroup' value={data.bloodGroup} onChange={inputHandler}>
                                            <option value="a+ve">a+ve</option>
                                            <option value="a-ve">a-ve</option>
                                            <option value="b+ve">b+ve</option>
                                            <option value="b-ve">b-ve</option>
                                            <option value="ab+ve">ab+ve</option>
                                            <option value="ab-ve">ab-ve</option>
                                            <option value="o+ve">o+ve</option>
                                            <option value="o-ve">o-ve</option>
                                        </select>

                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Address</label>
                                        <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile Number</label>
                                        <input type="text" className="form-control" name='mobileNo' value={data.mobileNo} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">pincode</label>
                                        <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">District</label>
                                        <select id="" className="form-control" name='address' value={data.address} onChange={inputHandler}>
                                            <option value="Idukki">Idukki</option>
                                            <option value="Kannuur">Kannuur</option>
                                            <option value="Ernakulam">Ernakulam</option>
                                            <option value="kollam">kollam</option>
                                            <option value="pathanamthitta">pathanamthitta</option>
                                            <option value="kozhikode">kozhikode</option>
                                            <option value="wayanad">wayanad</option>
                                            <option value="thrissur">thrissur</option>
                                            <option value="palakkad">palakkad</option>
                                            <option value="tvm">tvm</option>
                                            <option value="kasargod">kasargod</option>
                                            <option value="malappuram">malappuram</option>
                                            <option value="alappuzha">alappuzha</option>
                                            <option value="kottayam">kottayam</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">place</label>
                                        <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">pincode</label>
                                        <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='passward' value={data.passward} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label"> confirm Password</label>
                                        <input type="password" className="form-control" name='confirmpswd' value={data.confirmpswd} onChange={inputHandler} />
                                    </div>
                            
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}   >Register</button><br></br><br></br>

                                        <p>Back to Login <Link to="/">Login</Link></p>

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

export default AddUser