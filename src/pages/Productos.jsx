import TableProductos from "../components/TableProductos";
import { productosService } from "../services/productos";

const Productos = () => {
  const productos = productosService.getProductos();

  return (
    <div>
      <h1>Microprocesadores</h1>

      <TableProductos items={productos} />
    </div>
  );
};

export default Productos;
