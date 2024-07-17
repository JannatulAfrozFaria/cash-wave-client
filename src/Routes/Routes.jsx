import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import SendMoney from "../Pages/UsersPages/SendMoney";
import CashIn from "../Pages/UsersPages/CashIn";
import CashOut from "../Pages/UsersPages/CashOut";
import TransactionHistory from "../Pages/UsersPages/TransactionHistory";
import BalanceInquiry from "../Pages/UsersPages/BalanceInquiry";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard> ,
      children: [
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'sendMoney',
            element: <SendMoney></SendMoney>
        },
        {
            path: 'cashIn',
            element: <CashIn></CashIn>
        },
        {
            path: 'cashOut',
            element: <CashOut></CashOut>
        },
        {
            path: 'transactionHistory',
            element: <TransactionHistory></TransactionHistory>
        },
        {
            path: 'balanceInquiry',
            element: <BalanceInquiry></BalanceInquiry>
        },
        {
            path: 'profile',
            element: <Profile></Profile>
        }
      ]
    },
  ]);