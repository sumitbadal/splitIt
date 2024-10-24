import "./App.css";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/user/Login/Login";
import Register from "./components/user/Register/Register";
import { useDataStateContext } from "./components/context/DataStateContext";
import Body from "./components/Body/Body";
import CreateGroup from "./components/Groups/CreateGroup/CreateGroup";
import Groups from "./components/Groups/Groups";
import ErrorPage from "./components/ui-utils/ErrorPage";
import GroupDetails from "./components/Groups/Details/GroupDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/group",
        element: <Groups />,
        children: [
          {
            path: "/group/create",
            element: <CreateGroup />,
          },
          {
            path: "/group/detail/:groupId",
            element: <GroupDetails />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Body />}>
    //       {/* Private Routes */}
    //       <Route
    //         index
    //         element={
    //           <PrivateRoute>
    //             <Home />
    //           </PrivateRoute>
    //         }
    //       />

    //       {/* Public Routes */}
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />

    //       {/* Catch-all route for undefined paths */}
    //       <Route path="*" element={<Navigate to="/" />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
