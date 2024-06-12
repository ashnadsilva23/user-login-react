// import React, { useState } from 'react'
// import Navbar from './Navbar'

// const ViewAll = () => {
//     const[data,changeData]=useState([
//         {
//             "name":"bhagya",
//             "dob":"hj",
//             "bloodGroup":"h",
//             "mobileNo":"jb",
//             "address":"m",
//             "pincode":"k",
//             "district":"m",
//             "place":"uj",
//             "email":"b",
//             "userName":"nb",
//             "passward":"bb"
        
        
           
//         }
//     ])
//   return (
//     <div>
//         <Navbar/>
//                 <h1 align="center"><u>Registration</u></h1>

//         <div className="container">
//             <div className="row">
//                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                 <table class="table">
//   <thead>
//     <tr>
   
//       <th scope="col">Name</th>
//       <th scope="col">DOB</th>
//       <th scope="col">BLOOD GROUP</th>
//       <th scope="col">mobile No</th>
//       <th scope="col">address</th>
//       <th scope="col">pincode </th>
//       <th scope="col">district </th>
//       <th scope="col">place</th>
//       <th scope="col">email</th>
//       <th scope="col">userName</th>
//     </tr>
//   </thead>
//   <tbody>
    
   
//    {data.map(
//     (value,index)=>{
//         return  <tr>
        
//         <td>{value.name}</td>
//         <td>{value.dob}</td>
//         <td>{value.bloodGroup}</td>
//         <td>{value.mobileNo}</td>
//         <td>{value.address}</td>
//         <td>{value.pincode}</td>
//         <td>{value.district}</td>
//         <td>{value.place}</td>
//         <td>{value.email}</td>
//         <td>{value.userName}</td>
//       </tr>
//     }
//    )}
//   </tbody>
// </table>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ViewAll