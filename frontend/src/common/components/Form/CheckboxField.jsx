import React from "react";

import { styled } from "./../../../../stiches.config";

import { CheckboxInput } from "./CheckboxInput";

export const CheckboxField = React.forwardRef((props, ref) => {
  const inputProps = Object.assign({}, props);
  const { name, label, required, errors, components } = props;

  const { FieldWrapper, LabelWrapper, Label, LabelRequiredIndicator, InputWrapper, Input, ErrorsWrapper } = components;

  delete inputProps.components;

  return (
    <FieldWrapper.component {...FieldWrapper.props}>
      <div className="d-flex">
        <InputWrapper.component {...InputWrapper.props}>
          <Input.component {...Object.assign(Input.props, inputProps)} ref={ref} />
        </InputWrapper.component>
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
      </div>

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

const InputStyled = styled(CheckboxInput, {
  width: "1em",
  height: "1em",
  marginTop: "0.25em",
  verticalAlign: "top",
  backgroundColor: "#fff",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50%",
  backgroundSize: "contain",
  border: "1px solid rgba(0,0,0,.25)",
  borderRadius: "0.25rem",
  appearance: "none",
  colorAdjust: "exact",

  "&:checked": {
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd",
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>"
    )}")`,
  },
});

const ErrorsWrapperStyled = styled("div", {
  marginTop: "0.5rem",
  fontSize: ".8125rem",
  color: "#dc3545",
});

CheckboxField.defaultProps = {
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

    ErrorsWrapper: {
      component: ErrorsWrapperStyled,
      props: {},
    },
  },
};

// Input

CheckboxField.displayName = "CheckboxField";
