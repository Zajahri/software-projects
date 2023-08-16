import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



const TodoList = (props) => {
  const [isDone, setIsDone] = useState(false);
 

  const clickHandler = () => {
    setIsDone((prev) => !prev);
  };

  return (
    <div className="">
    <tbody className="">
      <tr className="shadow-sm mb-2 flex items-center justify-between min-w-[384px] max-w-[500px] h-14 rounded-lg border-orange-600 border-2 ">
        <td
          className={
            isDone
              ? " hover:cursor-pointer line-through text-xl select-none text-black "
              : "text-xl hover:cursor-pointer select-none text-black "
          }
          onClick={clickHandler}
        >
          <p className="p-5">{props.item}</p>
        </td>

        <td className="text-xl flex gap-5">
          <span
            className=" text-red-500 hover:cursor-pointer hover:text-red-700 mr-6"
          >
            <FontAwesomeIcon onClick={() => {
              props.onChecked(props.id);
            }} icon={faXmark} />
          </span>
        </td>
      </tr>
    </tbody>
    </div>
  );
};

export default TodoList;
