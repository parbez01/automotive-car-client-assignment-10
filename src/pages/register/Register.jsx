import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useContext } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";






const Register = () => {
    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const { createUser } = useContext(AuthContext)


 const location = useLocation()
 const navigate = useNavigate()


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password,name,photo);


        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            // toast.error("This didn't work.")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.')
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('Your password should have at least one special character.')
            return;
        }

        // reset error
        setRegisterError('')
        setSuccessMessage('')


        // cretae user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Successfully Registration!')
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }

    return (
        <div>

            <Navbar></Navbar>

            <div className="hero mt-20">
                <div className="hero-content flex-col ">
                <h2 className="text-4xl font-bold text-sky-500">Registration Now</h2>

                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

                        <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            {
                                registerError && <p className="text-red-600 text-xl text-center mt-10">{registerError}</p>
                            }
                            {
                                successMessage && <p className="text-green-600 text-xl text-center mt-10">{successMessage}</p>
                            }


                            <h2 className="text-2xl font-medium">You have already account? Please <Link to='/login'><span className="text-3xl text-blue-600 font-semibold">Login</span></Link></h2>

                        </form>

                        <div>
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;