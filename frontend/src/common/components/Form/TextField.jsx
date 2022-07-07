import React from "react";

import { styled } from "./../../../../stiches.config";

import { TextInput } from "./TextInput";

export const TextField = React.forwardRef((props, ref) => {
  const inputProps = Object.assign({}, props);
  const { name, label, required, description, errors, components } = props;

  const {
    FieldWrapper,
    LabelWrapper,
    Label,
    LabelRequiredIndicator,
    InputWrapper,
    Input,
    DescriptionWrapper,
    ErrorsWrapper,
  } = components;

  delete inputProps.components;

  return (
    <FieldWrapper.component {...FieldWrapper.props}>
      {label && (
        <LabelWrapper.component {...LabelWrapper.props}>
          <Label.component {...Label.props} htmlFor={name}>
            {label}
            {required && (
              <LabelRequiredIndicator.component {...LabelRequiredIndicator.props}>*</LabelRequiredIndicator.component>
            )}
          </Label.component>
        </LabelWrapper.component>
      )}
      <InputWrapper.component {...InputWrapper.props}>
        <Input.component type="text" name={name} id={name} {...Object.assign(Input.props, inputProps)} ref={ref} />
      </InputWrapper.component>
      {description && (
        <DescriptionWrapper.component {...DescriptionWrapper.props}>
          <p>{description}</p>
        </DescriptionWrapper.component>
      )}
      {errors && (
        <ErrorsWrapper.component {...ErrorsWrapper.props}>
          <p>{errors?.message}</p>
        </ErrorsWrapper.component>
      )}
    </FieldWrapper.component>
  );
});

const FieldWrapperStyled = styled("div", {
  marginBottom: "1rem",
});

const LabelWrapperStyled = styled("div", {
  marginBottom: "0.25rem",
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
});

const LabelStyled = styled("label", {
  fontSize: "1rem",
  lineHeight: "1.5",
});

const LabelRequiredIndicatorStyled = styled("span", {
  color: "#dc3545",
  marginLeft: "0.125rem",
});

const InputWrapperStyled = styled("div", {});

const InputStyled = styled(TextInput, {
  fontSize: "1rem",
  lineHeight: "1.5",
  display: "block",
  width: "100%",
  padding: "0.75rem 1.25rem",
  color: "#212529",
  border: "1px solid #ced4da",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  borderRadius: "0.75rem",
  transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",

  "&:focus": {
    borderColor: "#86b7fe",
    outline: "0",
    backgroundColor: "#fff",
    boxShadow: "0 0 0 0.25rem rgb(69 192 195 / 25%)",
  },
});

const DescriptionWrapperStyled = styled("div", {
  marginTop: "0.5rem",
  fontSize: ".8125rem",
  color: "#566a77",
});

const ErrorsWrapperStyled = styled("div", {
  marginTop: "0.5rem",
  fontSize: ".8125rem",
  color: "#dc3545",
});

TextField.defaultProps = {
  components: {
    FieldWrapper: {
      component: FieldWrapperStyled,
      props: {},
    },
    LabelWrapper: {
      component: LabelWrapperStyled,
      props: {},
    },
    Label: {
      component: LabelStyled,
      props: {},
    },
    LabelRequiredIndicator: {
      component: LabelRequiredIndicatorStyled,
      props: {},
    },
    InputWrapper: {
      component: InputWrapperStyled,
      props: {},
    },
    Input: {
      component: InputStyled,
      props: {},
    },
    DescriptionWrapper: {
      component: DescriptionWrapperStyled,
      props: {},
    },
    ErrorsWrapper: {
      component: ErrorsWrapperStyled,
      props: {},
    },
  },
};

// Input

TextField.displayName = "TextField";
