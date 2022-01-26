import React from "react";
import { Rings } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Rings arialLabel="loading-indicator" color="lightblue"/>
    </div>
  );
};
