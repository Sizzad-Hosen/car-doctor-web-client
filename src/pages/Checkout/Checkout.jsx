import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Checkout = () => {
    const service = useLoaderData();
    const {title, _id, img ,price} =  service;

    const {user}=useContext(AuthContext);
    const handleSubmit =e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

   
        const order = {
            customerName:name,
            date,
            img,
            email, 
            service:title,
            service_id:_id,
            price:price,
        }
        console.log(order);
        fetch('https://car-doctor-server-6kk1.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
const handleConfrim=()=>{
    Swal.fire({
        title: "Good job!",
        text: "Your Order Confirm To Added Bookmark",
        icon: "success"
      });
}
    return (
        <div className="bg-gray-200  text-gray-900">
            <h2 className="text-center mb-12 text-4xl text-orange-500">Book Service : {title}</h2>

    <section>
    <form onSubmit={handleSubmit}  >
   <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5  flex-shrink-0">
   <div className="w-full">
        <h2 className="text-2xl">Name</h2>
        <input className="px-12  w-full   py-3 bg-slate-100 text-gray-800" required  type="text" defaultValue={user?.displayname} name="name" id="" />
    </div>
    <div className="w-full">
    <h2 className="text-2xl">Date</h2>
        <input className="px-12  w-full  py-3 bg-slate-100 text-gray-800" required type="date" name="date" id="" />
    </div>
    <div  className="w-full">
    <h2 className="text-2xl">Email</h2>
        <input className="px-12  w-full   py-3 bg-slate-100 text-gray-800" required type="email" defaultValue={user?.email} name="email" id="" />
    </div>
    <div  className="w-full">
    <h2 className="text-2xl">Price</h2>
        <input className="px-12  w-full  py-3 bg-slate-100 text-gray-800" required defaultValue={`$`+ price} type="text" name="price" id="" />
    </div>
   </div>
  
    <input onClick={handleConfrim} type="submit" value="ORDER CONFRIM" className="btn w-full mt-4 bg-primary text-white " />


    </form>
  
   </section>
   

   </div>    
    );
};

export default Checkout;