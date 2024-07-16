import { FaBars, FaBook, FaCalendar, FaHome, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";

import { ImEnter } from "react-icons/im";
import { BsCashCoin } from "react-icons/bs";

import { FaSignOutAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { IoPersonAddSharp } from "react-icons/io5";
import { GoHistory } from "react-icons/go";


import { ImProfile } from "react-icons/im";
import { RiPlayListAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";
// import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    // const [isHR] = useAdmin();
    const isHR = true;
    //state for changing theme
    const [theme,setTheme]= useState('light');

    //Changing the Theme
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])


    const handleTheme = (e) =>{
        if(e.target.checked){
            setTheme('forest')
        }
        else{
            setTheme('light')
        }
    }
    return (
        <div className="flex">
       {/* Dashboard Side Bar */}
       <div className="w-40 md:w-64 min-h-screen bg-blue-200">
           <ul className="menu p-4 uppercase">
               {
                   isHR ? 
                       <>
                           <li>
                               <img className='w-1/2 mx-auto my-2' src="/src/assets/icons/icon.png" alt="" />
                           </li>
                           <li>
                               <NavLink to="/dashboard/AddAnAsset"><IoIosSend className="text-lg mr-0 md:mr-2" /> Send Money</NavLink>
                           </li>
                           <li>
                               <NavLink to="/dashboard/AddAnAsset"><ImEnter className="text-lg mr-0 md:mr-2" /> Cash In</NavLink>
                           </li>
                           <li>
                               <NavLink to="/dashboard/myEmployeeList"><FaSignOutAlt className="text-lg mr-0 md:mr-2"/>Cash Out</NavLink>
                           </li>
                           <li>
                               <NavLink to="/dashboard/myEmployeeList"><HiOutlineClipboardDocumentList className="text-lg mr-0 md:mr-2"/>Balance Inquiry</NavLink>
                           </li>
                           <li> 
                               <NavLink to="/dashboard/myEmployeeList"><GoHistory className="text-lg mr-0 md:mr-2"/>Transaction History</NavLink>
                           </li>
                           <li>
                               <NavLink to="/register"> <HiOutlineDocumentCheck className="text-lg mr-0 md:mr-2" /> Register </NavLink>
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
                    {/* THEME------CHANGE------BUTTON */}
                    <label className="cursor-pointer grid place-items-center mr-2 md:mr-8">
                        <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-blue-500 row-start-1 col-start-1 col-span-2"/>
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
               </li>
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
       {/* Dashboard Content */}
       <div className="flex-1">
           <Outlet></Outlet>
       </div>
   </div>
    );
};

export default Dashboard;