const express = require("express");
const router = express();
const { check } = require("express-validator");
const cadaverExquisito = require("../controllers/cadaverExquisito"); // Cambia esto al nombre correcto de tu controlador
const { validarCampos } = require("../middlewares/validador");

router.use(express.json());

router.post(
  "/palabras",
  [
    check("palabra", "El campo palabra es obligatorio.").not().isEmpty(),
    validarCampos,
  ],
  cadaverExquisito.registrarPalabra
);

router.get("/frase", cadaverExquisito.obtenerFrase);

router.delete(
  "/palabras/:palabra",
  [
    check("palabra", "El parametro palabra es obligatorio.").not().isEmpty(),
    validarCampos,
  ],
  cadaverExquisito.eliminarPalabra
);

router.get(
  "/generar/:cantidad",
  [
    check("cantidad", "El parametro cantidad es obligatorio.").not().isEmpty(),
    validarCampos,
  ],
  cadaverExquisito.generarPalabras
);

router.get("/informacion", cadaverExquisito.obtenerInformacionPalabras);

module.exports = router;
