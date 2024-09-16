import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const card = ({ name, description, link }) => {
  return (
    <div className="flex flex-col justify-center mt-5 transition-transform duration-300 hover:scale-105">
      
      <div className="bg-green-100 rounded-lg p-6 flex flex-col items-center w-[500px] gap-3 shadow-lg shadow-[#9a968b] ">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-red-300 mt-2 ">{description}</p>
        <Link
          to={link}
          className="mt-4 text-orange-500 bg-green-300 p-2 rounded-md"
        >
          Go to task...
        </Link>
      </div>
    </div>
  );
};

export default card;
