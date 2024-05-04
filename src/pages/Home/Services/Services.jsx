import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [services , setServices] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>{
      setServices(data);

    })
  },[])  
    return (
       <div id="service" className="mt-4  bg-gray-100  text-gray-900">
         <div className="text-center ">

<h2 className="text-4xl text-orange-500 p-2 pb-5">Services</h2>
<h2 className="text-5xl pb-4">Our Services Area</h2 >
<p>The majoity have suffered alternation in some from, <br /> by injected humour , or randomised words which do not <br /> look even slightly believable.</p>

<div className="grid  p-2 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
    {
        services.map(service=><div key={service.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={service.img} alt="Shoes" /></figure>
  <div className="card-body bg-gray-200  text-gray-900">
    <h2 className="card-title">{service.title}</h2>
    <p className="texl-xl text-orange-500">Price : ${service.price}</p>
    <div className="card-actions justify-end">
     <Link to={`/checkout/${service._id}`}>

     <button className="btn btn-primary hover:bg-warning ">Book Now</button>
  
     </Link>
    </div>
  </div>
</div>


        </div>)
        
    }
</div>


 
</div>
       </div>
    );
};

export default Services;