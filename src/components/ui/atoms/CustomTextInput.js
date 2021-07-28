import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomTextInput = ({
  fullWidth,
  label,
  multiline,
  required,
  rows,
  value,
  type,
  onChange,
}) => {
  return (
    <>
      <TextField
        label={label}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        multiline={multiline}
        required={required}
        rows={rows}
        type={type}
      />
    </>
  );
};

export default CustomTextInput;
