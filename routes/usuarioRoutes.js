import express from "express";
const router = express.Router();

import {
  registrar,
  autenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";

// Autenticació, Registro y Confirmación de Usuarios
router.post("/", registrar); // Crea un nuevo usuario
router.post("/login", autenticar); // Autenticacion del usuario
router.get("/confirmar/:token", confirmar); // Confirmar cuenta del nuevo usuario
router.post("/olvide-password/", olvidePassword); // Generar token para recuperación de nuevo password
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword); // Comprobar token y Cambiar contraseña

router.get("/perfil", checkAuth, perfil)



export default router;
