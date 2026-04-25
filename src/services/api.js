let port = "8080";
const URL_BASE = `http://localhost:${port}/`; 

export const end_points = {
    inicio: URL_BASE + "inicio",
    productos: URL_BASE + "productos/", // <--- Asegúrate que coincida con tu backend
    contacto: URL_BASE + "contacto/"
};