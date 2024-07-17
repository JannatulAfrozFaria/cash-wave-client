import { Helmet } from 'react-helmet-async';
import Title from '../../Components/Title';

const SendMoney = () => {
    return (
        <div>
            <Helmet>
                <title>Cash Wave | Send Money</title>
            </Helmet>
            <div className="hero bg-base-200 pb-24 min-h-screen">
                <div className="flex-col">
                    <Title heading={'send money'} subHeading={`remaining balance = 0 Tk`}></Title>
                    <div className="card bg-base-100 w-[300px] md:w-[600px] shadow-2xl">
                        <form className="card-body">
                            {/* MOBILE---NUMBER */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amount</span>
                                </label>
                                <input type="number" placeholder="0.00 TK" className="input input-bordered" required />
                            </div>
                            {/* PIN----NUMBER */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PIN Number</span>
                                </label>
                                <input type="password" placeholder="5-digit PIN" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-base">Send Money</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;