import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Layouts
import Main, { mainLoader } from "./layout/Main";

//actions
import { logoutAction } from "./actions/Logout";

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;
