/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SingleCard = ({card}) => {
    const {brandName,image} = card;
    return (
         <Link to={`/showData/${brandName}`}>

<div className="relative shadow-2xl border-2 border-gray-300 grid h-[400px] lg:h-[25rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <img className="h-[400px]" src={image} alt="" />
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">
    <h2 className=" block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    {brandName}
    </h2>
   

  </div>
</div>

         </Link>
    );
};

export default SingleCard;