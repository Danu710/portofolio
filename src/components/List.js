import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function List(props) {
  return (
    <p className="flex items-start font-sans text-white/70">
      <div style={{ marginTop: "0.40rem" }}>
        <KeyboardDoubleArrowRightIcon
          size={14}
          className="mr-2 text-lightGreen"
        />
      </div>
      {props.children}
    </p>
  );
}

export default List;
