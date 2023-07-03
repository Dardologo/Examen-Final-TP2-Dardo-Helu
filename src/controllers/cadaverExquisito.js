const axios = require("axios");

let palabras = [];

const registrarPalabra = async (req, res) => {
  const { palabra } = req.body;

  if (!palabra || !palabra.match(/^[A-Za-z]+$/)) {
    return res.status(422).json({
      status: 422,
      word: null,
      error:
        "Palabra no válida. Debe ser no vacía y sólo con caracteres alfabéticos.",
    });
  }

  palabras.push(palabra);

  return res.status(200).json({ status: 200, palabra });
};

const obtenerFrase = async (req, res) => {
  try {
    const frase = palabras.join(" ");
    return res.status(200).json({ frase });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const eliminarPalabra = async (req, res) => {
  const { palabra } = req.params;
  try {
    if (!palabra || !palabra.match(/^[A-Za-z]+$/)) {
      return res.status(422).json({
        status: 422,
        word: null,
        error:
          "Palabra no válida. Debe ser no vacía y sólo con caracteres alfabéticos.",
      });
    }

    const initialLength = palabras.length;
    palabras = palabras.filter((word) => word !== palabra);

    if (initialLength === palabras.length) {
      return res.status(404).json({
        status: 404,
        word: null,
        error: "Palabra no encontrada.",
      });
    }

    return res.status(200).json({ status: 200, palabra });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const generarPalabras = async (req, res) => {
  const { cantidad } = req.params;

  try {
    const response = await axios.get(
      `https://texto.deno.dev/palabras?cantidad=${cantidad}`
    );
    if (response.data) {
      palabras = palabras.concat(response.data.palabras);
      return res.status(200).json({
        cantidad: response.data.palabras.length,
        palabras: response.data.palabras,
      });
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const obtenerInformacionPalabras = async (req, res) => {
  try {
    const palabraContador = palabras.reduce((contador, palabra) => {
      if (!contador[palabra]) {
        contador[palabra] = 1;
      } else {
        contador[palabra]++;
      }
      return contador;
    }, {});

    return res.status(200).json(palabraContador);
  } catch (e) {
    return res.status(500).json({ errorMsg: e.message });
  }
};

module.exports = {
  registrarPalabra,
  obtenerFrase,
  eliminarPalabra,
  generarPalabras,
  obtenerInformacionPalabras,
};
