function Producto(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <p>{props.color}</p>
      <p>Stock: {props.stock}</p>
      <p>{props.stock > 0 ? "Disponible" : "sin stock"}</p>
      <p>{props.marca}</p>
    </div>
  );
} 
export default Producto;