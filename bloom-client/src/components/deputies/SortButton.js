import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  #underline {
    position: relative;
    height: 2px;
  }
`;
class SortButton extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({
      toggle: true,
    });
  }

  onMouseLeave() {
    this.setState({
      toggle: false,
    });
  }

  render() {
    const { toggle } = this.state;
    const { children, onClick, underline, color, className } = this.props;
    return (
      <Button className={className}>
        <Spring
          from={{ opacity: '0' }}
          to={{
            opacity: toggle ? '0.7' : '0',
            width: toggle ? '100%' : '0%',
            backgroundColor: toggle ? underline : 'white',
          }}
          config={{ duration: 200 }}
        >
          {(props) => (
            <div
              onMouseEnter={() => this.onMouseEnter()}
              onMouseLeave={() => this.onMouseLeave()}
              onClick={onClick}
            >
              <div style={{ color: color }}>{children}</div>
              <div style={props} id="underline" />
            </div>
          )}
        </Spring>
      </Button>
    );
  }
}
export default SortButton;
