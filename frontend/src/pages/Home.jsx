import "./Home.css";
import productos from "../data/productos";
import Producto from "../components/Producto";

function Home() {
  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <Producto
          nombre={producto.nombre}
          precio={producto.precio}
          color={producto.color}
          stock={producto.stock}
          marca={producto.marca}
          imagen={producto.imagen}
        />
      ))}
    </div>
  );
}

export default Home;










