import { createBrowserRouter } from "react-router-dom";
import NotFound from "./errorPages/NotFound";
import SignUp from "./pages/sign-up/sign-up-page";
import SignIn from "./pages/sign-in/sign-in-page";

const router = createBrowserRouter([
    { path: "/", element: <SignUp /> },
    { path: "/signin", element: <SignIn /> },
    { path: "*", element: <NotFound /> }

]);

export default router;
