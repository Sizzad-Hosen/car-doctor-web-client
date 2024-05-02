import { useContext } from "react";
import logo from "../../../assets/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const {logOut, user} = useContext(AuthContext);
  const handleLogout =()=>{
    logOut()
 .then(()=>{})
 .catch(error=>console.log(error))
  }

  const navlinks =<>
<li><NavLink to="/">Home</NavLink></li>
<li><HashLink smooth to="/#about">About</HashLink></li>
<li><HashLink smooth to="/#service">Services</HashLink></li>
<li><HashLink smooth to="/#blog">Blog</HashLink></li>


{
  user?.email? <>
  <li><NavLink to="/bookings">Booking Service</NavLink></li>
  <li><NavLink to="/login"><button onClick={handleLogout} className="">Logout</button></NavLink></li>
  </>
  :
  <li><NavLink to="/login">Login</NavLink></li>

}

 
  </>
    return (
        <div className="navbar bg-gray-900 text-white h-32 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {navlinks}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img  src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-2 menu-horizontal px-1">
         {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
      <Link to="/bookings">  <button className="btn btn-outline btn-accent">Appointment</button></Link>
        </div>
      </div>
    );
};

export default Navbar;