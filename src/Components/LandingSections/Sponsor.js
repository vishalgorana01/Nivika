import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Assets/Images/sponsor.jpg';

import '../../Assets/CSS/Sponsor.module.css';

export default function Sponsor() {
  return (
    <div className='wrapper my-5'>
      <div className="main ms-5 me-5">
      <div className="box">
        <div>
            <h2>Featured Products</h2>
        </div>
        <div className="images">
            <image>
                <img src={logo} alt="error loading" className="img-fluid p-5"/>
            </image>
            <image>
                <img src={logo} alt="error loading"  className="img-fluid p-5 "/>
            </image>
            <image>
                <img src={logo} alt="error loading" className="img-fluid  p-5"/>
            </image>
            <image>
                <img src={logo} alt="error loading" className="img-fluid p-5"/>
            </image>
            <image>
                <img src={logo} alt="error loading" className="img-fluid  p-5"/>
            </image>
        </div>
      </div>
      </div>
    </div>
  )
}
