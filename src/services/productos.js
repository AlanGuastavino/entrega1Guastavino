import microprocesadores from "../data/microprocesadores";

const getProductos = () => {
  const productos = microprocesadores.map((microprocesadores) => ({
    thumbnail: microprocesadores.thumbnail,
    name: microprocesadores.name,
    brand: microprocesadores.brand,
    image: microprocesadores.image,
    description: microprocesadores.description,
    price: microprocesadores.price,
  }));

  return productos;
};

const getProducto = (id) => {};

const createProducto = (data) => {};

const removeProducto = (id) => {};

const updateProducto = (id, data) => {};

export const productosService = {
  getProductos,
  getProducto,
  createProducto,
  removeProducto,
  updateProducto,
};
