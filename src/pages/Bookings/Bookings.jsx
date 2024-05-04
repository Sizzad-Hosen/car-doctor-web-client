import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'

const Bookings = () => {

  const handleDelete = id =>{


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    })
    
    .then((result) => {
      if (result.isConfirmed) {


        fetch(`http://localhost:5000/bookings/${id}`,{
          method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);


          if(data.deletedCount>0){


            const remaining = bookings.filter (booking=>booking._id !==id)
            setBookings(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })

      }
      
      else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: "Cancelled",
          text: "Your booking is safe :)",
          icon: "error"
        });
      }
    });
  }

  const {user} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`
  useEffect(()=>{
    fetch(url)
     .then(res=>res.json())
     .then(data=>{
        setBookings(data);
     })
  },[url]);


  const handleConfrim = id=>{
    fetch(`http://localhost:5000/bookings/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({status: 'confirm'})

    } )
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount >0){
        //
         const remaining = bookings.filter(booking=>booking._id !==id);
         const updated = bookings.find(booking=>booking._id===id);
         const newBooking = [updated, ...remaining]
         setBookings(newBooking);
      }

    })

  }

  return (
    <div>
      <h3 className="text-center bg-slate-200 p-4 text-2xl text-gray-950">You Added Booking Service : {bookings.length}</h3>
      <div className="overflow-x-auto bg-gray-200  text-gray-900">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
               <p className="text-gray-900">Delete</p>
                </label>
              </th>
              <th className="text-gray-900 ">Image</th>
              <th className="text-gray-900 ">Name</th>
              <th className="text-gray-900 ">Date</th>
              <th className="text-gray-900 ">Price</th>
              <th className="text-gray-900 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking)=>
              <BookingRow key={booking._id} handleDelete={handleDelete} handleConfrim={handleConfrim} booking={booking}></BookingRow>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
