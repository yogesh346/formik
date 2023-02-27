import { useFormik } from "formik";

const allvalue = {
  name: "",
  age: "",
  Email: "",
  Phone: "",
};
const submit = (values) => {
  console.log(values);
};
function StudentForm() {
  const formik = useFormik({
    initialValues: allvalue,
    onSubmit: submit,
  });

  return (
    <div>
      <h3>FORMIK</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label> Name </label>
          <input id="name" name="name" onChange={formik.handleChange} />
        </div>
        <div>
          <label> Age</label>
          <input id="age" name="age" onChange={formik.handleChange} />
        </div>
        <div>
          <label> Email</label>
          <input id="age" name="Email" onChange={formik.handleChange} />
        </div>
        <div>
          <label>phone</label>
          <input id="age" name="phone" onChange={formik.handleChange} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
