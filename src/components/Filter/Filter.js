import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { FilterWrapper } from "./FilterStyled";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

const Filter = ({ setFilter, value }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <FilterWrapper>
      <label>
        Filter:
        <input tupe="text" value={value} onChange={handleChange}></input>
      </label>
    </FilterWrapper>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (value) => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
