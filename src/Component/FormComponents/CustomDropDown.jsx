// import { useField } from 'formik'
import React from "react";
import { Dropdown } from "semantic-ui-react";

function DropdownList({
  field: { name, value },
  form: { setFieldValue },
  children: _,
  options,
  ...props
}) {
  // const[field,meta] = useField();
  // console.log(option);
  return (
    <div>
      <Dropdown
        {...props}
        value={value}
        fluid
        selection
        scrolling
        options={options}
        onChange={(_, { value }) => {
          setFieldValue(name, value);
        }}
      />
      {/* {meta.touched && meta.error && <Label basic color="red" pointing="left">{meta.error}</Label>} */}
    </div>
  );
}

export default DropdownList;
