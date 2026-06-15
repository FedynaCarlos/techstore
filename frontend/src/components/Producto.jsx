function Producto(props){
    return(
        <div>
            {props.nombre}
            {props.precio}
            {props.color}
        </div>
    );
}

export default Producto;