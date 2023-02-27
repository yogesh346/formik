import { useField } from "formik";
import React, { useState } from "react";
import { Radio } from "semantic-ui-react";

function RadioBtn({ ...props }) {
  const [gender, setGender] = useState(false);
  const [field] = useField(props);
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  // console.log(field);

  return (
    <div>
      <Radio
        {...field}
        {...props}
        label="Male"
        id={"male"}
        value={"male"}
        checked={gender === "male"}
        onChange={handleChange}
      />
      <Radio
        {...field}
        {...props}
        label="Female"
        id={"female"}
        value={"female"}
        checked={gender === "female"}
        onChange={handleChange}
      />
      {/* <Field {...field} type="radio" name={name} value={"male"}/> */}
    </div>
  );
}

export default RadioBtn;
