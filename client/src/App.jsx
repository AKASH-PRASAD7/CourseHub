import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Dashborad from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Register";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course/:id",
    element: <Course />,
  },
  {
    path: "/dashboard",
    element: <Dashborad />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <div className="App"></div>
      </RouterProvider>
    </>
  );
}

export default App;
