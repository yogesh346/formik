import "./FormComponents.scss";
import { Button, Input, Label, Popup } from "semantic-ui-react";
import { useField } from "formik";
import { Fragment } from "react";

const InputField = ({ ...props }) => {
  const [field, meta] = useField(props);
  // const error = !!(meta.touched && meta.error);
  // console.log(meta);
  // console.log(field);
  // console.log(props);
  return (
    <Fragment>
      <Input {...field} {...props} />
      {/* <input type="text" {...field} {...props} /> */}
      <Popup
        content="Add users to your feed"
        trigger={<Button icon="question circle outline" />}
      />
      {/* <input className='inp' /> */}
      {meta.touched && meta.error && (
        <Label basic color="red" pointing="left">
          {meta.error}
        </Label>
      )}
    </Fragment>
  );
};

export default InputField;
