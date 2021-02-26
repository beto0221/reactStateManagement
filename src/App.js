import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "buttonClick":
      return { ...state, count: state.count + 1 };
    case "setUsername":
      return { ...state, username: action.username };
    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, username: "" });

  return (
    <div>
      <button onClick={() => dispatch({ type: "buttonClick" })}>
        Click me
      </button>
      Current count is {state.count}
      <input
        type="text"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "setUsername", username: e.target.value })
        }
      ></input>
      Your current user name is {state.username}
    </div>
  );
}

export default App;
