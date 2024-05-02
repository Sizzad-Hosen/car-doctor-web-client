import About from "../About/About";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Team from "../Team/Team";
import WhyBest from "../WhyBest/WhyBest";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Popular></Popular>
            <Team></Team>
            <WhyBest></WhyBest>
            <Review></Review>
          
        </div>
    );
};

export default Home;