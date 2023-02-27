import { Label } from "semantic-ui-react";
import "./FormComponents.scss";

function LabelField({ name }) {
  return (
    <div>
      <Label>{name}</Label>
    </div>
  );
}

export default LabelField;
