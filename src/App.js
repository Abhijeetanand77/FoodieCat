import React ,{lazy,Suspense ,fallback} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenus";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useState , useEffect } from "react";
import UserContext from "./utils/userContext"
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const About = lazy(()=> import("./components/About"));

const AppLayout = () => {

  const [userName ,setUserName] = useState();

  // authentication
  useEffect(()=> {
   // make an api call and send username and password
    
   const data = {
    name : "Abhijeet Anand",
   }
   
   setUserName(data.name)
  },[])

  
  
return (

  <Provider store={appStore}>
  <UserContext.Provider value= {{loggedInUser :userName , setUserName}}>
  <>
    <Header />
    <Outlet/>
    <Footer />
  </>
  </UserContext.Provider>
  </Provider>
  
);
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error />,
    children: [

      { path: "/", element:<Body />  },

      { path: "/about", element:  <Suspense  fallback = {<h1>Loading...</h1>} >  <About /> </Suspense>   },

      { path: "/contact", element: <ContactUs /> },

      { path: "/restraunt/:id", element: <RestaurantMenu /> },

      {path: "/cart", element: <Cart /> },


    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
