/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ShowSingleData = ({ card }) => {
    const { _id, image, brandName, name, rating, type, price, description } = card
    return (
        <div>


<div className="relative flex w-full flex-col lg:flex-row rounded-2xl bg-white bg-clip-border text-gray-700 shadow-2xl">
  <div className="relative lg:w-[800px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <h6 className="block mb-4 font-sans text-2xl antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      Brand: {brandName}
    </h6>
    <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Model: {name}
    </h4>
    <p className="text-lg font-medium">Type: {type}</p>
    <p className="text-lg font-medium mt-2 mb-2">Rating: {rating}</p>
    <p className="block  lg:mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
     {description}
    </p>
    <p className="text-lg font-bold lg:mb-0 mb-6">Price: {price}</p>

    <div className="card-actions justify-around">
 <Link to={`/details/${_id}`}> <button type="button" className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-xl text-white font-bold lg:mt-8">   Details
 </button></Link>
 <Link to={`/update/${_id}`}>  <button type="button" className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-xl text-white font-bold lg:mt-8">
  Update
 </button></Link>
</div>

  </div>
</div>

 

        </div>
    );
};

export default ShowSingleData;


// <div className="card-actions justify-around">
// <Link to={`/details/${_id}`}> <button type="button" className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-xl text-white font-bold lg:mt-8">
//   Details
// </button></Link>
// <Link to={`/update/${_id}`}>  <button type="button" className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-xl text-white font-bold lg:mt-8">
//  Update
// </button></Link>
// </div>