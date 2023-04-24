import React from "react";

function Button(props) {
  return (
    <button
      className={`font-mono bg-transparent hover:bg-lightGreen text-lightGreen font-semibold hover:text-white py-2 px-4 border border-lightGreen hover:border-transparent rounded ${
        props.className || ""
      }`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
