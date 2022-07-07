import React from "react";

export const TextInput = React.forwardRef((props, ref) => {
  const { name } = props;
  return <input type="text" name={name} id={name} {...props} ref={ref} />;
});

TextInput.displayName = "TextInput";
