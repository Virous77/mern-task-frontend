import React from "react";
import "./Loader.css";
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <span className="spinner">
      <ImSpinner9 className="spinnerIcon" />
    </span>
  );
};

export default Loader;
