import cart from "../assets/carritoDeCompras.png";
export const CartWidget = () => {
  return (
    <>
      <img src={cart} height={48} />
      <span color="red">1</span>
    </>
  );
};
