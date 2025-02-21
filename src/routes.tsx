import { createBrowserRouter } from "react-router-dom";
import NotFound from "./errorPages/NotFound";



const router = createBrowserRouter([
    { path: "*", element: <NotFound /> }
]);

export default router;
