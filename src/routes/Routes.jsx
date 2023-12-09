
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import ShowData from "../components/ShowData/ShowData";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardDetails from "../pages/CardDetails/CardDetails";
import UpdateDetails from "../pages/CardDetails/UpdateDetails/UpdateDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('data.json')
        },
        {
            path:'/addProduct',
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:'/myCart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader:()=>fetch('https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/cart')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/showData/:brandName',
            element:<ShowData></ShowData>,
            loader:({params})=>fetch(`https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/product/brand/${params.brandName}`)
        },
        {
            path:'/details/:_id',
            element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/product/id/${params._id}`)
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>,
            loader:({params})=> fetch(`https://brand-shop-server-l0g6qsdo7-mrengineer129-gmailcom.vercel.app/product/${params.id}`)
        }
      ]
    },
  ]);
  export default router;