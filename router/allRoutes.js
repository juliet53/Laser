
import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
        new Route("/", "Accueil", "/pages/home.html",[]),
        new Route("/salle", "Nos salles", "/pages/salle.html",[]),
        new Route("/reservation", "Réservation", "/pages/reservation.html",["client"]),
        new Route("/connection", "Connection", "/pages/auth/connection.html",["disconnected"],"/js/auth/connection.js"),
        new Route("/inscription", "Inscription", "/pages/auth/inscription.html",["disconnected"],"/js/auth/inscription.js"),
        new Route("/moncompte", "Mon compte", "/pages/auth/moncompte.html",["client","admin"],),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Lazer";