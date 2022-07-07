import React from "react";

export const CheckboxInput = React.forwardRef((props, ref) => {
  const { name } = props;
  return <input type="checkbox" name={name} id={name} {...props} ref={ref} />;
});

CheckboxInput.displayName = "CheckboxInput";
