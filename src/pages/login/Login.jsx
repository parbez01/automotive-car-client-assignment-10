import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const auth = getAuth(app)

const Login = () => {
    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const { signIn, provider } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('Location in the login page', location);


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // reset error
        setRegisterError('')
        setSuccessMessage('')

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                // toast.success('Successfully Login!')

                // navigate after login
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                navigate(location?.state ? location.state : '/')
                console.log(loggedInUser);
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>


            <div className="hero mt-20">
                <div className="hero-content flex-col ">
                    <h2 className="text-4xl font-bold text-sky-500">Login Now</h2>

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">



                        <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>


                            {
                                registerError && <p className="text-red-600 text-xl text-center mt-10">{registerError}</p>
                            }
                            {
                                successMessage && <p className="text-green-600 text-xl text-center mt-10">{successMessage}</p>
                            }


                            <h2 className="text-2xl font-medium">Are you new to website? Please <Link to='/register'><span className="text-3xl text-blue-600 font-semibold">Registration</span></Link></h2>
                            <button onClick={handleGoogleLogIn} className=" flex items-center  gap-2 bg-blue-500 p-3 text-xl text-white font-bold rounded-xl"><img className="h-6 ml-16 lg:ml-32" src="https://i.ibb.co/5BGkz8r/google-icon-2048x2048-czn3g8x8.png" alt="" />Google Login</button>

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

export default Login;