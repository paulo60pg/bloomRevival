import React from "react";
import DatePicker from "react-datepicker";
import { asField } from "informed";

class DateInput extends React.Component {
  render() {
    return ({
      fieldState: { value },
      fieldApi: { setTouched, setValue },
      ...props
    }) => (
      <DatePicker
        onFocus={() => setTouched(true)}
        onChange={date => setValue(date)}
        selected={value}
        openToDate={value}
        {...this.props}
      />
    );
  }
}

export default asField(DateInput);
