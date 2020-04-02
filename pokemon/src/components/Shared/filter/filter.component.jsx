import React from "react";
import "./filter.styles.css";
import pokemonTypes from "../../../data/pokemon.types";

const Filter = ({
  onInputChange,
  onSecondInputChange,
  inputValue,
  secondInputValue,
  changeFilter,
  cleanFilter,
  type,
  typeDoesNotExist
}) => (
  <div className="mb-5 w-100 d-flex flex-column align-items-center justify-content-center">
    <div className="d-flex justify-content-center mb-4">
      <select
        className="form-control col-lg-12 col-md-8 col-sm-8 ml-1"
        placeholder="Filter by type"
        onChange={onInputChange}
        value={inputValue}
        type="text"
      >
        <option value="" disabled>
          Includes type
        </option>
        {pokemonTypes.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
      <select
        className="form-control col-lg-12 col-md-8 col-sm-8 ml-1"
        placeholder="Filter by type"
        onChange={onSecondInputChange}
        value={secondInputValue}
        type="text"
      >
        <option value="" disabled>
          Includes type
        </option>
        {pokemonTypes.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
      <button
        disabled={inputValue == "" || secondInputValue == ""}
        onClick={changeFilter}
        className="btn btn-sm btn-info ml-2"
      >
        Filter
      </button>
      {type !== "" ? (
        //   && !typeDoesNotExist
        <button
          className="btn btn-sm btn-outline-primary ml-2"
          onClick={cleanFilter}
        >
          Clean Filter
        </button>
      ) : null}
    </div>
    {typeDoesNotExist ? (
      <span className="alert alert-danger">Invalid pokemon type</span>
    ) : null}
  </div>
);
export default Filter;
