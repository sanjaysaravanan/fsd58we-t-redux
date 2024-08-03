import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const Product = ({ productName, image, price, quantity, id }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: "product_add_to_cart",
      product: { productName, image, price, quantity, id },
    });
  };

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        border: "1px solid",
        borderRadius: "4px",
      }}
    >
      <img
        src={image}
        style={{ height: 200, width: 300, objectFit: "contain" }}
      />
      <h2>{productName}</h2>
      <h3>{price}</h3>
      <h4>Qty: {quantity}</h4>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;
