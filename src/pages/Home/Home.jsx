import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SingleCard from "./singleCard";
import Service from "../../components/Service/Service";
import PricePlan from "../../PricePlan/PricePlan";


const Home = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <div className="shadow-2xl p-4"><Navbar></Navbar></div>
          <div className="">
          <Banner></Banner>
          </div>




            <div className="grid grid-cols-1 lg:grid-cols-3 lg:ml-12  lg:gap-10 mt-20 lg:mt-36  mb-10 gap-y-6 ">
                {
                    data.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>


            <Service></Service>

            <div className="lg:mt-0 mt-64"> <PricePlan></PricePlan>
            </div>

            <div className="">
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Home;