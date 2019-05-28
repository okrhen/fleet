import React, { useState } from "react";
import { connect } from "react-redux";

import { Button, Icon } from "../../../components";

import { setSelectedCategory } from "../../../configs/redux/reducers/home";

const Filter = ({ categories, filteredCategory, setSelectedCategory }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilterCategory, setSelectedFilterCategory] = useState(
    filteredCategory
  );

  return (
    <div className="Home-filter">
      <div className="Home-filter-header">
        <Button
          className="Home-filter-header-btn"
          onClick={() => setShowFilter(!showFilter)}
        >
          <span>Filter</span> <Icon name={showFilter ? "times" : "sliders-h"} />
        </Button>
      </div>
      <div className={`Home-filter-content ${showFilter ? "isOpen" : ""}`}>
        <span className="Home-filter-content-label">Categories</span>
        <div>
          {categories.map(item => (
            <Button
              key={item}
              className={`Home-filter-content-badge ${
                selectedFilterCategory === item ? "isSelected" : ""
              }`}
              onClick={() => setSelectedFilterCategory(item)}
            >
              <span>{item}</span>
            </Button>
          ))}
        </div>
        <div className="Home-filter-content-footer">
          <Button
            className="Home-filter-content-footer-apply"
            onClick={() => {
              setSelectedCategory(selectedFilterCategory);
              setShowFilter(false);
            }}
            disabled={filteredCategory === selectedFilterCategory}
          >
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.home.categories,
  filteredCategory: state.home.filteredCategory
});

const actionCreators = {
  setSelectedCategory
};

export default connect(
  mapStateToProps,
  actionCreators
)(Filter);
