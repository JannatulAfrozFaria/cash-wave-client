import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import registerIcon from '../../../src/register.json'
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Cash Wave | Register</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen pb-16">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center w-1/3 mx-16">
                        <Lottie className='w-full md:w-[400px] mx-auto' animationData={registerIcon} />
                    </div>
                    <div className="card bg-base-100 w-2/3 shadow-2xl">
                        <form className="card-body">
                            {/* NAME--------- */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            {/* EMAIL______ */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* MOBILE---NUMBER */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number" placeholder="Mobile Number" className="input input-bordered" required />
                            </div>
                            {/* PIN----NUMBER */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PIN Number</span>
                                </label>
                                <input type="password" placeholder="5-digit PIN" className="input input-bordered" required />
                            </div>
                            <h2 className="text-gray-500 text-sm mt-1">Already Have an Account? <Link className='text-blue-400 font-semibold' to="/login" > Login</Link>  </h2>
                            <div className="form-control mt-6">
                                <button className="btn btn-base">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;