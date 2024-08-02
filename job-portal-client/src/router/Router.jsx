import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home"; // Correct casing
import CreateJob from "../pages/CreateJob"; // Correct casing
import MyJobs from "../pages/MyJobs";
import SalaryPage from "../pages/SalaryPage";
import UpdateEdit from "../pages/UpdateEdit";
import Login from "../component/Login";
import JobDetails from "../pages/JobDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job", // Correct path
        element: <CreateJob />,
      },
      {
        path: "/my-job", // Correct path
        element: <MyJobs />,
      },
      {
        path: "/salary", // Correct path
        element: <SalaryPage />,
      },
      {
        path: "/edit-job/:id", // Correct path
    element: <UpdateEdit />,
        loader: ({ params }) => fetch(`http://localhost:3000`) // Corrected template literal
      },
      {
        path: "/job/:id",
        element: <JobDetails />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  
]);

export default router;
