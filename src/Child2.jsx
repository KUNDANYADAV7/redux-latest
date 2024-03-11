import React from "react";
import store from "./store";
import { square, cube, factorial, isPrime } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./counterSlice";
const Child2 = () => {
  const dispatch = useDispatch();
  let init = useSelector((state) => state.counter);
  return (
    <>
      <h1>Child2 component</h1>
      <input
        type="text"
        disabled
        value={init}
        style={{
          textAlign: "center",
          border: "1px solid black",
          marginBottom: "10px",
          marginLeft: "50px",
          marginTop: "30px",
        }}
      />
      <br />
      <button
        onClick={() => dispatch(isPrime())}
        style={{ width: "100px", marginLeft: "90px" }}
      >
        Is Prime
      </button>
    </>
  );
};

export default Child2;
