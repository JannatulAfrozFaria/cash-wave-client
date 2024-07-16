import { FaBars, FaBook, FaCalendar, FaHome, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdAddCard } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";

import { ImProfile } from "react-icons/im";
import { RiPlayListAddLine } from "react-icons/ri";
// import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    // const [isHR] = useAdmin();
    const [isHR] = true;
    return (
        <div className="flex">
        {/* Dashboard Content */}
        <div className="flex-1">
           <Outlet></Outlet>
       </div>
       {/* Dashboard Side Bar */}
       <div className="w-40 md:w-64 min-h-screen bg-purple-200">
           <ul className="menu p-4 uppercase">
               {
                   isHR ? 
                       <>
                           <li>
                               <img className='w-1/2 mx-auto my-2' src="/src/assets/icons/icon.png" alt="" />
                           </li>
                           <li>
                               <NavLink to="/dashboard/AddAnAsset"><MdAddCard className="text-lg mr-0 md:mr-2" /> Add an Asset</NavLink>
                           </li>
                           <li>
                               <NavLink to="/dashboard/myEmployeeList"><FaUsers className="text-lg mr-0 md:mr-2"></FaUsers>My Employee list</NavLink>
                           </li>
                           <li>
                               <NavLink to="/dashboard/addAnEmployee"> <IoPersonAddSharp className="text-lg mr-0 md:mr-2" /> Add an Employee </NavLink>
                           </li>
                       </> 
                   :
                   <>
                       {/* EMPLOYEE-----DASHBOARD */}
                       <div className="divider"></div>
                       {/* <li>
                           <NavLink to="/dashboard/reservation"><TbChecklist className="text-lg mr-0 md:mr-2" /> My Assets</NavLink>
                       </li> */}
                       <li>
                           <NavLink to="/dashboard/myTeam"> <FaUsers className="text-lg mr-0 md:mr-2"></FaUsers>My Team</NavLink>
                       </li>
                       <li>
                           <NavLink to="/dashboard/requestAsset"> <RiPlayListAddLine className="text-lg mr-0 md:mr-2" />Request for an asset</NavLink>
                       </li>
                   </>
               }
                       
                       
                       

               {/* Shared Menu Options------- */}
               <div className="divider"></div>
               <li>
                           <NavLink to="/"><FaHome className="text-lg mr-0 md:mr-2" ></FaHome>Home</NavLink>
                       </li>
               <li>
                   <NavLink to="/dashboard/profile"><ImProfile className="text-lg mr-0 md:mr-2" />Profile</NavLink>
               </li>
               <div className="divider"></div>
               <li className="w-2/3 mx-auto">
                   {/* <Link to="/dashboard/profile" >{user?.displayName}</Link> */}
               </li>
               <li className="w-2/3 mx-auto">
                   {/* <Link to="/dashboard/profile"><img className="rounded-full" src={user?.photoURL} alt="" /></Link> */}
               </li>
               
               <li>
                   {/* {user && <> 
                   <Link> <RiLogoutCircleLine className="text-lg mr-0 md:mr-2"/><button onClick={handleLogOut} className="btn btn-base w-28 btn-sm"> Logout</button>  </Link>
                   </>} */}
               </li>
           </ul>
       </div>
   </div>
    );
};

export default Dashboard;