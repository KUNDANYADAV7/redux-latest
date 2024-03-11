// import React from "react";
// import store from "./store";
// import { square, cube, pows } from "./counterSlice";
// import { useDispatch, useSelector } from "react-redux";
// import counterSlice from "./counterSlice";
// import Child from "./Child";
// const App = () => {
//   store.subscribe(() => console.log(store.getState()));
//   // useDispatch()
//   let init = useSelector((state) => state.counter);
//   return (
//     <>
//       <h1>App component is running</h1>
//       <h2>{init}</h2>
//       <button
//         onClick={() => {
//           store.dispatch(square());
//         }}
//       >
//         Square
//       </button>
//       <button
//         onClick={() => {
//           store.dispatch(cube());
//         }}
//       >
//         Cube
//       </button>
//       <button
//         onClick={() => {
//           store.dispatch(pows(7));
//         }}
//       >
//         Power
//       </button>
//       <Child />
//     </>
//   );
// };

// export default App;
import React from "react";
import store from "./store";
import { square, cube, pows, factorial, isPrime } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "./counterSlice";
import Child from "./Child";
import Child2 from "./Child2";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  store.subscribe(() => console.log(store.getState()));
  const dispatch = useDispatch();
  let init = useSelector((state) => state.counter);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "250px",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            height: "200px",
            borderRadius: "10px",
          }}
        >
          <h1>App component</h1>
          {/* <h2>{init}</h2> */}
          <input
            type="text"
            disabled
            value={init}
            style={{
              textAlign: "center",
              border: "1px solid black",
              marginTop: "30px",
              marginBottom: "10px",
              marginLeft: "50px",
            }}
          />
          <br />
          <button
            onClick={() => dispatch(square())}
            style={{ width: "100px", marginLeft: "90px" }}
          >
            Square
          </button>
        </div>
        {/* <button onClick={() => dispatch(cube())}>Cube</button>
      <button onClick={() => dispatch(pows(7))}>Power</button> */}
        {/* <button
        onClick={() => dispatch(factorial())}
        style={{ width: "100px", marginLeft: "10px" }}
      >
        Factorial
      </button>
      <button
        onClick={() => dispatch(isPrime())}
        style={{ width: "100px", marginLeft: "10px" }}
      >
        Is Prime
      </button> */}
        <div
          style={{
            marginLeft: "100px",
            border: "1px solid black",
            height: "200px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Child />
        </div>
        <div
          style={{
            marginLeft: "100px",
            border: "1px solid black",
            height: "200px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Child2 />
        </div>
      </div>
    </>
  );
};

export default App;
