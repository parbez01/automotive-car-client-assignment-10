/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const SingleCartAdd = ({ cartData, deleteCart, handleCart }) => {

    const { _id, image, brandName, name, rating, type, price, description } = cartData

    const handleDelete = (_id) => {
        // console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(` https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            );

                            const filterCart = deleteCart.filter(data => data._id !== _id)
                            handleCart(filterCart)
                        }
                    })
            }
        })

    }

    return (
        <div>


            <div className=" relative flex flex-col lg:flex-row rounded-2xl bg-white bg-clip-border text-gray-700 shadow-2xl">
                <div className="relative lg:w-[700px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img className='lg:w-full w-[420px] lg:h-[400px]'
                        src={image}
                        alt="image"

                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        Brand: {brandName}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <p>Model: {name}</p>
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {description}
                    </p>

                    <button onClick={() => handleDelete(_id)}
                        className="flex ml-36 lg:ml-0 items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-orange-500 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none p-4 bg-red-600"
                        type="button"
                    >
                        Delete

                    </button>

                </div>
            </div>


        </div>
    );
};

export default SingleCartAdd;


{/* <button  onClick={() => handleDelete(_id)} className="btn btn-error lg:ml-32 lg:mb-10">Delete</button> */ }