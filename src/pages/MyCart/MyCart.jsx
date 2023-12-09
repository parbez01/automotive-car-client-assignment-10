import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SingleCartAdd from "./SingleCartAdd";
import { useState } from "react";

const MyCart = () => {

    const data = useLoaderData()

    const [deleteCart,setDeleteCart] = useState(data)
    const handleCart = (filterCarts) =>{
        setDeleteCart(filterCarts)
    }
    // const {_id, image, brandName, name, rating, type, price, description } = data
    // console.log(data);
    console.log(deleteCart);

    return (
        <div>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 gap-10 lg:mt-20 lg:mb-20">
                {
                    deleteCart.length > 0 ? deleteCart.map(cartData => <SingleCartAdd key={cartData._id} cartData={cartData} deleteCart={deleteCart} handleCart={handleCart}></SingleCartAdd>) : <img className="flex justify-center h-[600px] w-[600] ml-[500px]" src="https://i.ibb.co/TTFPcBk/3009287.jpg" alt="" />
                }
            </div>
        </div>
    );
};

export default MyCart;
