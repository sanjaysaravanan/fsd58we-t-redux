import { useSelector } from "react-redux";
import "./App.css";

import CounterApp from "./CounterApp";
import Product from "./components/Product";
import products from "./data.json";

const CartBtn = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  return (
    <button style={{ float: "right" }}>
      Cart ({cartReducer.totalProducts})
    </button>
  );
};

function App() {
  return (
    <>
      <CartBtn />
      {console.log("App Rendering")}
      <CounterApp />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((pd) => (
          <Product key={pd.id} {...pd} />
        ))}
      </div>
    </>
  );
}

export default App;
