import React from "react";

export const HiddenInput = React.forwardRef((props, ref) => {
  const { name } = props;
  return <input type="hidden" name={name} id={name} {...props} ref={ref} />;
});

HiddenInput.displayName = "HiddenInput";
