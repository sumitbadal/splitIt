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
import LoadingBackdrop from "./components/ui-utils/backdrop/LoadingBackdrop";
import { useLoading } from "./components/context/LoadingContext";
import Friends from "./components/Friends/Friends";
import CreateFriend from "./components/Friends/CreateFriend";
import Account from "./components/Account/Account";
import FriendDetails from "./components/Friends/FriendDetails";

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
      {
        path: "/friends",
        element: <Friends />,
        children: [
          {
            path: "/friends/create",
            element: <CreateFriend />,
          },
        ],
      },
      {
        path: "/friend/:friendId",
        element: <FriendDetails />,
      },
      {
        path: "/Account",
        element: <Account />,
      },
    ],
  },
]);
function App() {
  const { loading } = useLoading();

  return (
    <>
      <LoadingBackdrop open={loading} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
