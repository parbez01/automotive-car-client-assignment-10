import { useLoaderData } from "react-router-dom";
import ShowSingleData from "./ShowSingleData";
import Navbar from "../Navbar/Navbar";

const ShowData = () => {
  const product = useLoaderData()
  // const {image} = product;
  console.log(product);
  return (
    <div>

      <div>
        <Navbar></Navbar>

        <div className="carousel w-full lg:h-[700px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/t3fqPT1/Rent-A-Car-Web-Banner-12.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/KXYM9kY/Rent-A-Car-Facebook-Cover-21.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/LvZMQWG/Rent-A-Car-Facebook-Cover-06.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/NWZwb0x/Rent-A-Car-Facebook-Cover-17.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>


      </div>

      <div className="grid lg:grid-cols-1 gap-10 lg:mt-10 lg:mb-10">
        {
          product.length > 0 ? product.map(card => <ShowSingleData key={product._id} card={card}></ShowSingleData>) :
            <div>
              <p className="text-3xl font-semibold bg-green-300 text-black rounded-lg text-center p-6 mt-10">There is No similar data of this brand. </p>
              <img className="flex lg:justify-center lg:h-[600px] w-[600] lg:ml-[500px]" src="https://i.ibb.co/TTFPcBk/3009287.jpg" alt="" />
            </div>
        }
      </div>
    </div>
  );
};

export default ShowData;