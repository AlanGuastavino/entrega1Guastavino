import Producto from "./Producto";

const TableProductos = ({ items }) => {
  const renderItems = () => {
    const rta = [];

    for (let i = 0; i < items.length; i++) {
      rta.push(
        <Producto
          key={items[i].name}
          thumbnail={items[i].thumbnail}
          name={items[i].name}
          brand={items[i].brand}
          description={items[i].description}
          price={items[0].price}
          onDelete={(name) => {
            console.log(name);
          }}
        />
      );
    }
    return rta;
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{renderItems()}</tbody>
    </table>
  );
};

export default TableProductos;
