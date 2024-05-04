import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import  { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
  const navigate = useNavigate();


 const {signIn ,githubLogin, googleLogin} = useContext(AuthContext);
 const [sucess, setSucess] = useState(null);
 const [loginError , setLoginError] = useState(null);

 const handleGithubLogin=()=>{
  githubLogin()
  .then(result=>{
    console.log(result.user);
  
   })
  
  
  
  
  .catch(error=>{
    console.log(error);
  
  })

 }

const handleGoogleLogin=()=>{
  googleLogin()
  .then(result=>{
    console.log(result.user);
  
   })
  
  
  
  
  .catch(error=>{
    console.log(error);
  
  })

}


    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;
        const user = {password , email};
        console.log(user);

      
    if(password.length<6){
      setSucess('Please Enter Your Valid User And Password');
      return;

    }

       signIn(email , password)
       .then(result=>{
        const user  = result.user;
        console.log(user);
        e.target.reset;
       // naviagte kore home e pathai disi user kdefault hisave
       navigate("/");

      
       if(result.user.emailVerified ){
         Swal.fire({
           position: "top-center",
           icon: "success",
           title: "User Login Succesfully ",
           showConfirmButton: false,
           timer: 3000
         });
 
       }
       else{
         alert('Please Verify Your Email Address And Login');
       }
 
 
     })
 
 
     .catch(error=>{
       console.log(error);
       setLoginError(error.message);
     })


    }
    return (
        <div className="hero min-h-screen  bg-gray-100  text-gray-900">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center w-1/2 ">
           
          <img src={login} alt="" />
          </div>
          <div className="card py-12 w-full max-w-sm shadow-2xl ">

            <form onSubmit={handleLogin} className="card-body text-gray-900 bg-gray-100 ">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="text-white input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="  text-white input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-gray-900">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center border pb-3 border-orange-500">
            <h2 className="text-xl p-2">Another Login Method</h2>
              <button onClick={handleGoogleLogin} className="btn mr-3 bg-slate-600 text-white">Google</button>
              <button onClick={handleGithubLogin} className="btn  bg-blue-600 text-white">Github</button>
            </div>
            <p className=" text-center p-5">New to Car Doctors ?<Link className="text-blue-500" to="/signup"> Sign Up</Link></p>
            {
              loginError && <p className="text-center p-3 text-red-400">{loginError}</p>
            }
          </div>
        </div>
      </div>
    );
};

export default Login;