import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";


const CardDetails = () => {
  const details = useLoaderData()
  // console.log(details);
  const { image, brandName, name, rating, type, price, description } = details



  const handleAddToCart = (item) => {
    fetch(" https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product Add to CArt Successfully',
            showConfirmButton: false,
            timer: 1500
          }) 
          
        }
        else{
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Already added',
            showConfirmButton: false,
            timer: 1500
          })
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };




  return (
    <div>
      <Navbar></Navbar>

      <div className="card   bg-base-100 shadow-2xl lg:mt-10 lg:mb-10">
        <figure className="px-10 pt-10">
          <img className="w-full lg:h-[700px] rounded-2xl " src={image} alt="Shoes" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">Brand: {brandName}</h2>
          <p className="text-lg">Model Name: {name}</p>
          <p className="text-lg">Rating: {rating}</p>
          <p className="text-base font-normal">{description}</p>
          <p className="text-xl font-bold">Price: {price}</p>

          <div className="card-actions">
            {/* <button onClick={() => handleAddToCart(details)} className="btn btn-primary">Add to Cart</button> */}
            <button onClick={() => handleAddToCart(details)} type="button" className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-xl text-white font-bold lg:mt-8">
             Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;