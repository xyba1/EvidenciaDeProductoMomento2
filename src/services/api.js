let port = "8080";
const URL_BASE = `http://localhost:${port}/`; 

export const end_points = {
    Login: URL_BASE + "inicio",
    products: URL_BASE + "productos/", 
    contact: URL_BASE + "contacto/"
};