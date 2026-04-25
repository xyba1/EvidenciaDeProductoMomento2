import Login from "../pages/Login";

export const routerApp = [
    {
        path: "/", // Esto le dice que cargue en la raíz
        element: <Login />,
    },
    {
        path: "*", // Esto captura cualquier otra ruta inexistente
        element: <Login />, 
    }
];