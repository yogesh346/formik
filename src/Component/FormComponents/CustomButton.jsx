import { Button } from "semantic-ui-react";

function CustomButton({ children }) {
  return (
    <div>
      <Button children={children} />
    </div>
  );
}

export default CustomButton;
