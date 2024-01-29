import React from "react";
import LayOut from "./LayOut/LayOut";
import Product from "./Product/Product";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Brand from "./Brand/Brand";
import Category from "./Category/Category";
import Contact from "./Contact/Contact";
import Setting from "./Setting/Setting";
import NotFound from "./NotFound/NotFound";
import Web from "./Web/Web";
import Profile from "./Profile/Profile";
import AppSetting from "./App/App";
import LogOutLayOut from "./LogOutLayOut/LogOutLayOut";
import Login from "./Login/Login";
import Register from "./Register/Register";

const routers = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "brand", element: <Brand /> },
      { path: "category", element: <Category /> },
      { path: "contact", element: <Contact /> },
      { path: "home", element: <Home /> },
      { path: "products", element: <Product /> },
      {
        path: "settings",
        element: <Setting />,
        children: [
          { path: "web", element: <Web /> },
          { path: "profile", element: <Profile /> },
          { path: "app", element: <AppSetting /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "auth",
    element: <LogOutLayOut />,
    children: [
      { path: "", element: <Login /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routers}> </RouterProvider>;
}

export default App;
