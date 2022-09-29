import React ,{useEffect, useState}from 'react'
import "./Nav.css"

function Nav() {
const [show ,handleShow] = useState(false);
const transitionNavbar = () => {
  if(window.scrollY > 100 ) {
    handleShow(true);
  } else {
    handleShow(false);
  }
}
useEffect(() => {
window.addEventListener("scroll", transitionNavbar);
return () => window.removeEventListener("scroll", transitionNavbar);
},[]);

  return (
    <div className={`nav ${show && `nav--black`} `}>
    <div className='nav-container'>
<img
className='navbar--logo'
 src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
<img 
className='avatar--logo'
src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="" />
    </div>
    </div>
  )
}

export default Nav