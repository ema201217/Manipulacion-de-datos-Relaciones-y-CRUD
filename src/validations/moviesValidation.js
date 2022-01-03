const { check } = require("express-validator");

module.exports = [
  check("title").notEmpty().withMessage("Ingrese un titulo"),

  check("rating")
    .notEmpty()
    .withMessage("Ingrese un rating")
    .bail()
    .isNumeric()
    .withMessage("El valor debe ser numerico"),

  check("release_date").notEmpty().withMessage("Ingrese una fecha de estreno"),

  check("length")
    .notEmpty()
    .withMessage("Ingresa la duracion en minutos").bail()
    .isNumeric()
    .withMessage("El valor debe ser numerico"),

  check("awards")
    .notEmpty()
    .withMessage("Ingresa los premios").bail()
    .isNumeric()
    .withMessage("El valor debe ser numerico"),


  check("genre_id").notEmpty()
  .withMessage("Elige un genero"),
];
