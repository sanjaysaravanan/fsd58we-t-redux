import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterApp = () => {
  const [textVal, setTextVal] = useState("");

  // use the count from store value
  // consuming the values from the store
  const countReducer = useSelector((state) => state.countReducer);

  console.log(countReducer);

  // trigger an action which will change the store
  const dispatch = useDispatch();
  // above dispatch can be used to trigger an action in the store

  //
  return (
    <>
      {console.log("CounterApp Rendering")}
      <h1>{countReducer.count}</h1>
      <button onClick={() => dispatch({ type: "count_inc" })}>Inc</button>
      <button onClick={() => dispatch({ type: "count_dec" })}>Dec</button>
      <button onClick={() => dispatch({ type: "count_reset" })}>Reset</button>

      <input
        type="text"
        value={textVal}
        onChange={(e) => setTextVal(e.target.value)}
      />
      <br />
      <button
        onClick={() =>
          dispatch({ type: "count_inc_by", number: Number(textVal) })
        }
      >
        Increase By Above
      </button>
      {/* Just for Task Reference */}
      <button
        onClick={() =>
          dispatch({
            type: "product_add_to_cart",
            product: {},
          })
        }
      >
        Add To Cart
      </button>
    </>
  );
};

export default CounterApp;
