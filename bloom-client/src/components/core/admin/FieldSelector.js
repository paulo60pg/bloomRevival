import React from "react";

class FieldSelector extends React.Component {
  render() {
    const { data, handleChange, label, name } = this.props;
    return (
      <div className="form-group">
        <label forhtml={name}>{label}</label>
        <select
          className="form-control"
          id={name}
          onChange={e => handleChange({ name: name, value: e.target.value })}
        >
          <option>...</option>
          {data.map((data, index) => (
            <option key={index} value={data._id}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default FieldSelector;
