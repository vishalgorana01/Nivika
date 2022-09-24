import React from 'react'
import '../../Assets/CSS/Services.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';


// import img1 from '../../Assets/Images/item (1).jpg'
import img2 from '../../Assets/Images/item (2).jpg'
// import img3 from '../../Assets/Images/item (3).jpg'

export default function Services() {
  return (
    <div>
    <div className='wrap_ser my-5'>
   <div className="main_ser ms-5 me-5">
   <div className="box_ser">
     <div>
         <h2>Services</h2>
         <p>Lorem ipsum dolor sit amet.</p>
     </div>
     <div className="images_ser ">
         <image>
             <img src={img2} className="img-fluid p-5" alt="error loading"/>
             <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magnam!</p>
         </image>
         <image>
             <img src={img2} alt="error loading"  className="img-fluid p-5 "/>
             <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magnam!</p>
         </image>
         <image>
             <img src={img2} alt="error loading" className="img-fluid  p-5"/>
             <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magnam!</p>
         </image>
         </div>
     </div>
  
   </div>
 </div>
 </div>
  )
}
