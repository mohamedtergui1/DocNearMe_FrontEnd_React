import { createBrowserRouter } from "react-router-dom";
import NotFound from "./errorPages/NotFound";
import SignIn from "./pages/auth/sign-in/sign-in-page";
import SignUp from "./pages/auth/sign-up/sign-up-page";

const router = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    { path: "*", element: <NotFound /> }

]);

export default router;
