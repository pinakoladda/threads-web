import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./pages/posts";
import { LoginPage } from "./pages/login";
import { AuthProvider } from "./hooks/useAuth/useAuth";
import { RegisterPage } from "./pages/register";
import { CreatePost } from "./components/CreatePost";
import { Profile } from "./pages/profile";
import { SearchPage } from "./pages/search";
import { NotificationsPage } from "./pages/notifications";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/user/:userLogin",
    element: <Profile />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
