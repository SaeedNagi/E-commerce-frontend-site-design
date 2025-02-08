// import logo from './logo.svg';
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categore from "./components/Categore";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import AllCategories from "./components/AllCategories";
import Footer from "./components/Footer";
import Webdetails from "./components/Webdetails";
import Footer2 from "./components/Footer2";
import MyCart from "./components/MyCart";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <AllCategories />
        <Footer />
      </div>
    ),
  },
  {
    path: "/categore",
    element: (
      <div>
        <Header />
        <Categore />
        <Footer />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Header />
        <Dashboard />
        <Footer />
      </div>
    ),
  },
  {
    path: "/webdetails",
    element: (
      <div>
        <Header />
        <Webdetails />
        <Footer2 />
      </div>
    ),
  },
  {
    path: "/mycart",
    element: (
      <div>
        <Header />
        <MyCart />
      </div>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
