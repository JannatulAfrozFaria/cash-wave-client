import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import loginIcon from '../../../src/login.json'
import { Helmet } from "react-helmet-async";
const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Cash Wave | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen pb-16">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center w-1/2 md:w-1/2">
                        <Lottie className='w-full h-full' animationData={loginIcon} />
                    </div>
                    <div className="card bg-base-100 w-5/6 md:w-1/2 shadow-2xl">
                        <form className="card-body">
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
                            <h2 className="text-gray-500 text-sm mt-1">Don't have an account? <Link className='text-blue-400 font-semibold' to="/register" > Register </Link>  </h2>
                            <div className="form-control mt-6">
                                <button className="btn btn-base">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;