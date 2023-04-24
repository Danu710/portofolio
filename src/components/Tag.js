import React from "react";

function Tag(props) {
  return (
    <div className="bg-gray-200 shadow-lightGreen shadow-md  text-darkBlue rounded-sm px-3 mx-1 text-xs font-mono whitespace-nowrap">
      {props.name}
    </div>
  );
}

export default Tag;
