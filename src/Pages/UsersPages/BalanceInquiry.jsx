import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";

const BalanceInquiry = () => {
    return (
        <div>
        <Helmet>
            <title>Cash Wave | Balance Inquiry</title>
        </Helmet>
        <div className="bg-base-200 py-12 min-h-screen">
            <div className="flex-col">
                <Title heading={'Balance Inquiry'} subHeading={`Your Total Balance is 0 Tk`}></Title>
            </div>
        </div>
    </div>
    );
};

export default BalanceInquiry;