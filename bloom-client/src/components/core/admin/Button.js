import React from "react";

class Button extends React.Component {
  render() {
    const { label, className, onSubmit } = this.props;
    return (
      <button
        type="button"
        className={className}
        onClick={evt => onSubmit(evt)}
      >
        {label}
      </button>
    );
  }
}

export default Button;
