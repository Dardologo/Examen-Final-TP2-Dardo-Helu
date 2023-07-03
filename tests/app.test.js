const axios = require("axios");

describe("Test endpoints", () => {
  let server;
  beforeAll(() => {
    server = require("../app");
  });

  test("Registrar palabra.", async () => {
    const response = await axios.post("http://localhost:3000/palabras", {
      palabra: "prueba",
    });
    expect(response.status).toBe(200);
    expect(response.data.palabra).toBe("prueba");
  });

  test("Retornar todas las palabras, armando una frase.", async () => {
    const response = await axios.get("http://localhost:3000/frase");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("frase");
  });

  test("Eliminar una palabra.", async () => {
    const response = await axios.delete(
      "http://localhost:3000/palabras/prueba"
    );
    expect(response.status).toBe(200);
    expect(response.data.palabra).toBe("prueba");
  });

  test("Retornar la cantidad especifica de cada palabra.", async () => {
    const response = await axios.get("http://localhost:3000/informacion");
    expect(response.status).toBe(200);
  });
});
