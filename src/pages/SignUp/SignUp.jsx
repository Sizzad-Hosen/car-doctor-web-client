import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { sendEmailVerification } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignUp = () => {

    const {  createUser } = useContext(AuthContext);
    const [sucess, setSucess] = useState(null);
    const [signUpError , setSignUpError] = useState(null);
    const [showPassword, setPassword] = useState(false);


    const handleSignUp=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const terms = form.terms.checked;
        const user = {name, password , email};
        console.log(user);

        setSucess('');
        setSignUpError('');


        // password check
        if(password.length<6){
          return setSucess('Please Enter Your Password Must be At Last 6 digit or Longer');


        }
        
        else if(!/[A-Z]/.test(password)){
      setSignUpError('Your Password Must Be One Character Upper Case.');
           return;
           
         }
         else if(!terms){
          setSignUpError('Please Accept Our Terms And Condition');
          return;
        }


        createUser(email,password)
        .then(result=>{
            const user = result.user;

            console.log(user);
            sendEmailVerification(result.user)
         .then(() => {
            // when enter 6 digit correctely sent message a toast
          
            if(result.user )
            alert('Please Check Your Email And Verified');

         });
  

        })
        .catch(error=>{
          console.log(error);
          setSignUpError(error.message);
        })

      
    




      


    }
    return (
        <div className="hero min-h-screen text-gray-900 bg-gray-100">
        <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 ">
           
           <img src={login} alt="" />
           </div>
          <div className="card  w-full max-w-sm shadow-2xl ">

            <form onSubmit={handleSignUp} className="card-body text-gray-900 bg-gray-100">
            <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
       
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900">Name</span>
                </label>
                <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
              </div>


              <div className="form-control text-gray-900">
                <label className="label">
                  <span className="label-text text-gray-900">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className=" input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-900">Password</span>
                </label>
            {/* showpassword div and pass input field */}
            
              <div className="border rounded   relative"> 

              <input  type = {showPassword ? "text" : "password" } 
              placeholder="password"
               name="password" 
               className="input input-bordered w-full " required />

            <span className="absolute top-4 right-2" onClick={()=>setPassword(!showPassword)}>
              {
                showPassword ?   <FaEye></FaEye> : <FaEyeSlash />
              } 
             
              </span>

              </div>
              <div className="mb-2 pt-2">
                  {/* terms condition check */}
              <input type="checkbox" name="terms" id="terms" /> 
              <label className="ml-2" htmlFor="terms">Accept Our <a href="">All terms And Conditions</a></label>
   
   
   {/*end terms condition check */}
              </div>
            
   <br />
                <label className="label">
                  <a href="#" className="text-gray-900 label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
        

              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p className="text-center p-5">Already have an account ? <Link className="text-orange-400" to="/login">Login</Link></p>

            {
              sucess && <p className="text-center p-3 text-red-400">{sucess}</p>
            }
            {
              signUpError &&  <p className="text-center p-3 text-red-400">{signUpError}</p>
            }
          </div>
        </div>
      </div>
    );
};

export default SignUp;