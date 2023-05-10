import React from 'react';
import styled, { css } from 'styled-components';
import Select, { components } from 'react-select';
import Global from '../../Global';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  margin-left: 1.5rem;
  border-left: 1px solid ${Global.color.light};
  ${(props) =>
    props.mobileView &&
    css`
      padding: 0.5rem;
      border-top: 1px solid ${Global.color.light};
      margin-left: 0rem;
      border-left: none;
      border-right: none;
    `}
  .deputies-select {
    width: 30rem;
    ${(props) =>
      props.mobileView &&
      css`
        width: 100vw;
      `}
  }
  .darken-app {
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0;
    transition: 0.4s;
    ${(props) =>
      props.onMenuOpen &&
      css`
        position: absolute;
        height: 100vh;
        width: 100vw;
        opacity: 0.2;
      `}
  }
  .rotate {
    font-size: 1.5rem;
    color: ${Global.color.light};
    transform: rotate(90deg);
    transition: 0.4s;
    &:hover {
      color: ${Global.color.secondAccent};
    }

    ${(props) =>
      props.onMenuOpen &&
      css`
        color: ${Global.color.secondAccent};

        transform: rotate(0deg);
      `}
  }
`;

const groupBadgeStyles = {
  backgroundColor: Global.color.secondary,
  borderRadius: '2em',
  color: 'white',
  display: 'inline-block',
  fontSize: '0.8rem',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.3em 0.5em',
  textAlign: 'center',
};
const noOptionsStyle = {
  lineHeight: '1',
  minWidth: 1,
  padding: '0.8em 0.1em',
  textAlign: 'center',
};

const groupStyles = {
  color: Global.color.primary,
  fontSize: Global.font.size.header,
  fontFamily: Global.font.title,
  borderBottom: `1px solid ${Global.color.light}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const styles = {
  option: (provided, state) => ({
    ...provided,
    color: Global.color.dark,
    paddingLeft: '2rem',
    backgroundColor: state.isSelected ? Global.color.secondary : 'white',
    padding: '0.8rem',
    ':hover': {
      backgroundColor: Global.color.tertiary,
      color: 'white',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: Global.color.primary,
    display: 'flex',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: Global.color.disabled,
  }),
  control: (base) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 5,
  }),
};

const mobileStyles = {
  option: (provided, state) => ({
    ...provided,
    color: Global.color.dark,
    paddingLeft: '1.2rem',
    backgroundColor: state.isSelected ? Global.color.secondary : 'white',
    padding: '0.8rem',
    ':hover': {
      backgroundColor: Global.color.tertiary,
      color: 'white',
    },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: '0.85rem',
    fontWeight: 'bold',
    color: Global.color.primary,
    display: 'flex',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '0.85rem',
    color: Global.color.absence,
  }),
  control: (base) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 5,
  }),
};

const formatGroupLabel = (data) => {
  return (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
};

const customTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
});

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);
const NoOptionsMessage = ({ props }) => {
  return (
    <div {...props} style={noOptionsStyle}>
      Aucun députés, groupes, ou partis n'a été trouvé...
    </div>
  );
};
const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props} className="rotate">
        <i
          className={props.selectProps.menuIsOpen ? 'fas fa-search-minus' : 'fas fa-search-plus'}
        />
      </components.DropdownIndicator>
    )
  );
};
class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onMenuOpen: false,
      placeholder: 'Rechercher un groupe, un parti, ou un député...',
    };
    this.onMenuOpen = this.onMenuOpen.bind(this);
    this.onMenuClose = this.onMenuClose.bind(this);
  }

  onMenuOpen() {
    this.setState({
      onMenuOpen: true,
      placeholder: '',
    });
  }
  onMenuClose() {
    this.setState({
      onMenuOpen: false,
      placeholder: 'Rechercher un groupe, un parti, ou un député...',
    });
  }

  render() {
    const { options, handleChange, mobileView } = this.props;
    const { onMenuOpen, placeholder } = this.state;
    return (
      <Container onMenuOpen={onMenuOpen} mobileView={mobileView}>
        <div className="darken-app" />
        <Select
          className="deputies-select"
          styles={mobileView ? mobileStyles : styles}
          formatGroupLabel={formatGroupLabel}
          value={this.props.location.pathname}
          onChange={handleChange}
          onMenuOpen={this.onMenuOpen}
          onMenuClose={this.onMenuClose}
          options={options}
          isSearchable
          isClearable
          components={{ SingleValue, NoOptionsMessage, DropdownIndicator }}
          theme={customTheme}
          placeholder={placeholder}
        />
      </Container>
    );
  }
}

export default withRouter(SearchField);
