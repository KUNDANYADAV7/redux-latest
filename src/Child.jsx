import React from "react";
import store from "./store";
import { square, cube, factorial } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./counterSlice";
const Child = () => {
  const dispatch = useDispatch();
  let init = useSelector((state) => state.counter);
  return (
    <>
      <h1>Child component</h1>
      {/* <h2>{init}</h2> */}
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
      {/* <button
        style={{ width: "100px" }}
        onClick={() => {
          store.dispatch(square());
        }}
      >
        Square
      </button>
      <button
        style={{ marginLeft: "10px", width: "100px" }}
        onClick={() => {
          store.dispatch(cube());
        }}
      >
        Cube
      </button> */}

      <button
        onClick={() => dispatch(factorial())}
        style={{ width: "100px", marginLeft: "90px" }}
      >
        Factorial
      </button>
    </>
  );
};

export default Child;
