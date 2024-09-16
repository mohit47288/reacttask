import React, { useState } from "react";

const Task2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center">
      {" "}
      <div className=" bg-orange-100 rounded-lg p-6 flex flex-col items-center w-[500px] gap-2 shadow-lg shadow-[white]">
        <span className="bg-orange-200 px-4 py-1 rounded-lg text-orange-500">
          {count}
        </span>
        <div className="flex gap-3 ">
          <button
            className=" mt-4 text-orange-500 bg-orange-300 p-2 rounded-md"
            onClick={() => setCount(count - 1)}
          >
            Decrease
          </button>
          <button
            className=" mt-4 text-orange-500 bg-orange-300 p-2 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increase
          </button>
          <button
            className=" mt-4 text-orange-500 bg-orange-300 p-2 rounded-md"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task2;
