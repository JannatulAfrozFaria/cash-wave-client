import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";

const TransactionHistory = () => {
    return (
        <div>
        <Helmet>
            <title>Cash Wave | Transaction History</title>
        </Helmet>
        <div className="bg-base-200 py-12 min-h-screen">
            <div className="flex-col">
                <Title heading={'Transaction History'} subHeading={'list of last 10 transactions'}></Title>
            </div>
        </div>
    </div>
    );
};

export default TransactionHistory;