export const validate = (values) => {
  const errors = {};

  /**@desc Name Validation */
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  /**@desc Age Validation */
  if (!values.age) {
    errors.age = "Required";
  } else if (values.age < 18 || values.age > 48) {
    errors.age = "Age must be 18 or 48 ";
  }

  /**@desc Email Validation */
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  /**@desc Phone Validation */
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[6-9]\d{9}$/i.test(values.phone)) {
    errors.phone = "Enter Correct phone number!";
  }

  // console.log(values.drop);

  /**@desc Gender Validation */
  if (!values.radio) {
    // console.log(values)
    errors.radio = "Required";
  } else if (values.radio === "Select") {
    errors.radio = "Please select any option";
  }

  /**@desc Dropdown Validation */
  if (!values.language) {
    errors.language = "Enter Input";
  } else if (values.language === "select") {
    errors.language = "Please Select any value";
  }

  /**@desc Terms and Conditions Validation */
  if (!values.termscheck) {
    errors.termscheck = "Click this Checkbox";
  }
  return errors;
};
