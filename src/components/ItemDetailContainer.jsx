import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import carga from "../assets/cargando.gif";
export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 2000);
    })
      .then((response) => {
        const finded = response.find((i) => i.id === Number(id));
        setProduct(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return <img src={carga} className="signoDeCarga" />;
  }
  return (
    <div className="descripcionDelProducto">
      <h1>{product.title}</h1>
      <h2>{product.category}</h2>
      <img src={product.pictureUrl} />
      <h5>{product.description}</h5>
      <h4>{product.price}</h4>
    </div>
  );
};
