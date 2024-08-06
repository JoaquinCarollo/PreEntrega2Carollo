import { useState } from "react";

export const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);
  function incrementarPedido() {
    if (cantidad < stockDisponible) {
      setCantidad(cantidad + 1);
    }
  }
  function reducirPedido() {
    {
      if (cantidad > 0) {
        return setCantidad(cantidad - 1);
      }
    }
  }
  const stockDisponible = 10;
  return (
    <>
      <div>
        <button onClick={() => incrementarPedido()}>+</button>
        <p>{cantidad}</p>
        <button onClick={() => reducirPedido()}>-</button>
      </div>
      <button>Agregar al carrito</button>
    </>
  );
};
