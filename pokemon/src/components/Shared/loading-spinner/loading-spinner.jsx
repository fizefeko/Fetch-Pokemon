import React from "react";
import "./loading-spinner.css";
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center">
    <div className="lds-default" style={{ width: "100px", height: "100px" }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
export default LoadingSpinner;
