import "./Producto.css";
function Producto(props) {
  return (
    <div className="producto-card">
      <h2>{props.nombre}</h2>
      <img
  src={props.imagen}
  alt={props.nombre}
   style={{ width: "200px", height: "auto" }}
/>

<p>Marca: {props.marca}</p>

<p>Precio: ${props.precio}</p>

<p>Color: {props.color}</p>

<p>Stock: {props.stock}</p>

<p>
  {props.stock > 0 ? "Disponible ✅" : "Sin stock ❌"}
</p>
    </div>
  );
} 
export default Producto;