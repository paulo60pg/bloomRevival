import React from "react";
import { Text } from "informed";
class Input extends React.Component {
  render() {
    const { label, field, type } = this.props;
    return (
      <div className="form-group">
        <label className="form-group" htmlFor={field}>
          {label}
        </label>
        <Text id={field} field={field} type={type} className="form-control" />
      </div>
    );
  }
}

export default Input;
