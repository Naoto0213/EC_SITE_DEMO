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
  select,
  children,
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
        select={select}
      >
        {children}
      </TextField>
    </>
  );
};

export default CustomTextInput;
