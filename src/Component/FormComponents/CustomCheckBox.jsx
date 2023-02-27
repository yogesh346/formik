import { useField } from "formik";
import React, { Fragment } from "react";
import { Checkbox, Label } from "semantic-ui-react";

function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <Fragment>
      <div>
        <Checkbox
          id={"termscheck"}
          value={"termscheck"}
          {...props}
          {...field}
          label="I agree to the terms & conditions.."
        />
        {/* <input {...field} {...props}/>
        <span>I agree to the terms and conditions...</span> */}
      </div>
      {meta.touched && meta.error && (
        <Label basic color="red" pointing="above">
          {meta.error}
        </Label>
      )}
    </Fragment>
  );
}

export default CustomCheckbox;
