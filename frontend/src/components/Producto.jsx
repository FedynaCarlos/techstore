function Producto(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>{props.precio}</p>
      <p>{props.color}</p>
      <p>Stock: {props.stock}</p>
    </div>
  );
} 
export default Producto;