import { useEffect, useState } from "react";
import productos from "../data/productos.json";
import carga from "../assets/images.png";
export const ItemDetail = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos[0]), 2000);
    })
      .then((result) => setProduct(result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading === true) {
    return <img src={carga} />;
  }
  return (
    <>
      {product.map((product) => (
        <div key={product.id} className="producto">
          <img src={product.pictureUrl} />
        </div>
      ))}
    </>
  );
};
