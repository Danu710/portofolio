import React from "react";

function Tabs(props) {
  return (
    <ul className="whitespace-nowrap col-span-12 sm:col-span-3 lg:col-span-4 xl:col-span-3 text-xs overflow-x-auto inline-flex sm:flex sm:flex-col">
      {props.menu.map((menu, index) => {
        return (
          <li
            onClick={() => props.onChange(menu)}
            key={index}
            className={
              "text-lightGreen ease-in-out transition-all duration-300 cursor-pointer py-4 sm:py-2 px-3 border-b-2 sm:border-b-0 border-l-0 sm:border-l-2"
            }>
            {menu}
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
