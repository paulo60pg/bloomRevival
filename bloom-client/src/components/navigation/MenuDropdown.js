import React from "react";
import styled, { css } from "styled-components";
import Select, { components } from "react-select";
import Global from "../../Global";

const NavContainer = styled.div`
  padding: 0.8rem 0;
  .deputies-select {
    width: 100%;
    /* border: 1px solid ${Global.color.light}; */
  }
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? Global.color.secondary : "white",
    padding: 10,
    ":hover": {
      backgroundColor: Global.color.tertiary,
      color: "white"
    }
  }),
  singleValue: base => ({
    ...base,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    background: Global.color.tertiary,
    color: "white",
    display: "flex"
  }),
  placeholder: base => ({
    ...base,
    fontSize: "1em",
    color: "grey",
    fontWeight: 300
  }),
  control: base => ({
    // ...base,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    border: "none",
    borderRadius: 5
  })
};
const customTheme = theme => ({
  ...theme,
  borderRadius: 0
});

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMenuOpen: false
    };
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMenuOpen() {
    this.setState({
      onMenuOpen: true
    });
  }
  onMenuClose() {
    this.setState({
      onMenuOpen: false
    });
  }
  render() {
    const { selectedOption, options, handleChange, placeholder } = this.props;
    const { onMenuOpen } = this.state;
    return (
      <NavContainer onMenuOpen={onMenuOpen}>
        <div className="darken-app" />
        <Select
          className="deputies-select"
          styles={customStyles}
          value={selectedOption}
          onChange={handleChange}
          onMenuOpen={this.onMenuOpen}
          onMenuClose={this.onMenuClose}
          options={options}
          isSearchable
          isClearable
          components={{ SingleValue }}
          theme={customTheme}
          placeholder={placeholder}
        />
      </NavContainer>
    );
  }
}

export default Navigation;
