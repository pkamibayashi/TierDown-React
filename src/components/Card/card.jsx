import React from "react";

const Card = ({ part }) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-md p-4 m-4">
      <h2 className="text-lg font-bold">{part.partName}</h2>
      <p className="text-gray-700">{part.partNumber}</p>
      <p className="text-gray-700">{part.machineSerialNumber}</p>
      <p className="text-gray-700">{part.userCreator.name}</p>
      <p className="text-gray-700">{part.createdAt}</p>
    </div>
  );
};

export default Card;
