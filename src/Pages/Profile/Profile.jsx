import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title";

const Profile = () => {
    return (
        <div>
        <Helmet>
            <title>Cash Wave | Profile</title>
        </Helmet>
        <div className="bg-base-200 py-12 min-h-screen">
            <div className="flex-col">
                <Title heading={'profile details'} subHeading={'name:'}></Title>
            </div>
        </div>
    </div>
    );
};

export default Profile;