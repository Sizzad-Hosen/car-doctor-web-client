import products1 from "../../../assets/images/products/1.png"
import products2 from "../../../assets/images/products/2.png"
import products3 from "../../../assets/images/products/3.png"
import products4 from "../../../assets/images/products/4.png"
import products5 from "../../../assets/images/products/6.png"
import products6 from "../../../assets/images/products/6.png"


const Popular = () => {
    return (
      <section className="text-gray-900 bg-slate-200">
        <h2 className="text-4xl text-center p-4 mt-3 text-orange-500">Popular Product</h2>
          <section className="mb-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="card w-96 text-gray-900 bg-slate-100 shadow-xl">
  <figure className="px-10  pt-10">
    <img src={products1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
    </h2>
    <h2>Car Engine Plug</h2>
        <p>$20.00</p>
   
  </div>
</div>
            <div className="card w-96 text-gray-900 bg-slate-100 shadow-xl">
  <figure className="px-10  pt-10">
    <img src={products2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
    </h2>
    <h2>Car Engine Plug</h2>
        <p>$20.00</p>
   
  </div>
</div>
            <div className="card w-96 text-gray-900 bg-slate-100 shadow-xl">
  <figure className="px-10  pt-10">
    <img src={products3} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
    </h2>
    <h2>Car Engine Plug</h2>
        <p>$20.00</p>
   
  </div>
</div>
            <div className="card w-96 text-gray-900 bg-slate-100 shadow-xl">
  <figure className="px-10  pt-10">
    <img src={products4} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
    </h2>
    <h2>Car Engine Plug</h2>
        <p>$20.00</p>
   
  </div>
</div>
            <div className="card w-96 text-gray-900 bg-slate-100 shadow-xl">
  <figure className="px-10  pt-10">
    <img src={products5} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
    </h2>
    <h2>Car Engine Plug</h2>
        <p>$20.00</p>
   
  </div>
</div>
            <div className="card w-96 text-gray-900 bg-slate-100 shadow-xl">
  <figure className="px-10  pt-10">
    <img src={products6} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-500" />
</div>
    </h2>
    <h2>Car Engine Plug</h2>
        <p>$20.00</p>
   
  </div>
</div>

        </section>
      </section>
    );
};

export default Popular;