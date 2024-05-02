import team1 from "../../../assets/images/team/1.jpg"
import team2 from "../../../assets/images/team/2.jpg"
import team3 from "../../../assets/images/team/3.jpg"

const Team = () => {
    return (
      
            <div id="blog" className="mb-5 text-gray-900 bg-slate-100"> 
            <h2 className="text-3xl p-2 text-center text-orange-500">Team</h2>
            <h1 className="text-5xl pb-3 text-center ">Meet Our Team</h1>


            <p className="text-center pb-3">The majoity have suffered alternation in some from, <br /> by injected humour , or randomised words which do not <br /> look even slightly believable.</p>
           
           
            <div className="grid grid-cols-1 text-gray-900 bg-slate-100 lg:grid-cols-3 md:grid-cols-3 gap-5">

            <div className="card card-compact w-96 text-gray-900 bg-slate-100 shadow-xl">
            <figure><img src={team1}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine expert</p>
            </div>
            </div>
            <div className="card card-compact w-96 text-gray-900 bg-slate-100 shadow-xl">
            <figure><img src={team2}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine expert</p>
            </div>
            </div>
            <div className="card card-compact w-96 text-gray-900 bg-slate-100 shadow-xl">
            <figure><img src={team3}alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine expert</p>
            </div>

            </div>
            </div>

        </div>
    );
};

export default Team;