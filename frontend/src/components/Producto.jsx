function Producto(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>

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