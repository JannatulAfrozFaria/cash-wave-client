import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import registerIcon from '../../../src/register.json'


const Register = () => {
    return (
        <div className="mx-auto">
            <Helmet>
                <title>Cash Wave | Register</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
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
                                <input type="text" placeholder="email" className="input input-bordered" required />
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
                                    <span className="label-text">5-digit PIN</span>
                                </label>
                                <input type="password" placeholder="PIN Number" className="input input-bordered" required />
                            </div>
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