import Login from "../pages/Login";
import Products from "../pages/Products"; 

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
        path: "*",
        element: <Login />
    }
];