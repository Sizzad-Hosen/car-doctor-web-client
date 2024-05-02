import check from "../../../assets/icons/check.svg"
import deliveryt from "../../../assets/icons/deliveryt.svg"
import group from "../../../assets/icons/group.svg"

import person from "../../../assets/icons/person.svg"
import Wrench from "../../../assets/icons/Wrench.svg"

const WhyBest = () => {
    return (
        <section className="mb-5 text-gray-900 bg-slate-100">
          <div className="text-center pt-3">
          <h3 className="text-orange-400 pt-2  text-3xl">Core Features</h3>
            <h1 className="text-4xl pt-2 pb-3">Why Choose Us</h1>
            <p>The majoity have suffered alternation in some from,  by injected humour <br /> , or randomised words which do not <br /> look even slightly believable.</p>
          </div>
        
            <div className="text-gray-900 bg-slate-100  grid lg:grid-cols-6  md:grid-cols-3 grid-cols-2 gap-2">
                <div className="ps-2 font-semibold p-2 m-2 text-gray-800  bg-slate-100 w-28 h-28">

         <div className="ps-3">
            
         <img className="" src={check} alt="" />
                <h3 >100% Guranty</h3>
                
           
         </div>
                </div>
                <div className="ps-2 font-semibold p-2 m-2 text-gray-800  bg-slate-100 w-28 h-28">

         <div className="ps-3">
            
         <img className="" src={deliveryt} alt="" />
                <h3 >Timely Delivery</h3>
                
           
         </div>
                </div>
                <div className="ps-2 font-semibold p-2 m-2 text-gray-800  bg-slate-100 w-28 h-28">

         <div className="ps-3">
            
         <img className="" src={group} alt="" />
                <h3 >Expert Team</h3>
                
           
         </div>
                </div>
                <div className="ps-2 font-semibold p-2 m-2 text-gray-800  bg-slate-100 w-28 h-28">

         <div className="ps-3">
            
         <img className="" src={person} alt="" />
                <h3 >24/7 Support</h3>
                
           
         </div>
                </div>
                <div className="ps-2 font-semibold p-2 m-2 text-gray-800  bg-slate-100 w-28 h-28">

         <div className="ps-3">
            
         <img className="" src={Wrench} alt="" />
                <h3 >Best Equipment</h3>
                
           
         </div>
                </div>
                <div className="ps-2 font-semibold p-2 m-2 text-gray-800  bg-slate-100 w-28 h-28">

         <div className="ps-3">
            
         <img className="" src={check} alt="" />
                <h3 >Guranty</h3>
                
           
         </div>
                </div>
               

            </div>

            
        </section>
    );
};

export default WhyBest;