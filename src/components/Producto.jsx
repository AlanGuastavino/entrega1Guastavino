const Producto = ({
  thumbnail,
  name,
  brand,
  image,
  description,
  price,
  onDelete,
}) => {
  return (
    <tr>
      <td>
        <img src={thumbnail} alt="imagen" />
      </td>
      <td>{brand}</td>
      <td>{image}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => onDelete(name)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Producto;
