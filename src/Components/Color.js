import React from "react";
const Color = (props) => {
  return (
    <div className="parent-div ">
      <div className="colorNameDiv">{props.name}</div>
      <ul>
        {props.allColors.map((color, index) => {
          return (
            <li>
              <div
                className="color-div"
                style={{ backgroundColor: `${color}` }}
              ></div>
              <div className="colorCode-div">
                <span className="span-number">
                  {index == 0 ? 50 : index * 100}
                </span>
                <span>{color}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Color;
