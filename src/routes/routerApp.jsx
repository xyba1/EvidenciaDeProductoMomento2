import Login from "../pages/Login";
import Products from "../pages/Products"; 
import Contact from "../pages/Contact";
export const routerApp = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/products", // 
        element: <Products />
    },
    {
        path: "/contact",
        element: <Contact />
    }
];