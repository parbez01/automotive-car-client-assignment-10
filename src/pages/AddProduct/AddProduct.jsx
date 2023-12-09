import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const allDetails = { image, name, brandName, type, price, description, rating }
        console.log(allDetails);

        // send data to server
        fetch(' https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/product',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allDetails)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  }) 
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>




            <div className="bg-[#F4F3F0] rounded-2xl p-10 mt-16">
                <h2 className="text-3xl font-bold text-center mb-12 ">Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    {/* single row */}
                    <div className=" gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URl</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="image" placeholder="Image URL URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* name and brand name row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="brandName" placeholder="brand name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* type and price row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="type" placeholder="type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* description and rating row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" placeholder="shortDescription" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="number" id="rating" name="rating" min="1" max="100" placeholder="rating"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add Product" className="btn btn-block bg-pink-300 mt-10" />
                </form>
            </div>




        </div>
    );
};

export default AddProduct;