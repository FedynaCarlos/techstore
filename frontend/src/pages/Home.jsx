import productos from "../data/productos";
import Producto from "../components/Producto";

function Home() {
  return (
    <div>
      {productos.map((producto) => (
        <Producto
          nombre={producto.nombre}
          precio={producto.precio}
          color={producto.color}
        />
      ))}
    </div>
  );
}

export default Home;