import { TextField } from "./../src/common/components/Form/TextField";

export default function FloatingPage() {
  return (
    <>
      <div className="container">
        <div className="col-6 ms-auto me-auto mt-10">
          <h1 className="mb-8">Floating label</h1>
          <p>
            Create a TextFieldFloating component that will be a field in a form with a floating label. Component
            TextFieldFloating is supposed to be{" "}
            <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noreferrer">
              higher order component
            </a>{" "}
            using TextField component. To style element use{" "}
            <a href="https://stitches.dev/" target="_blank" rel="noreferrer">
              Stiches
            </a>{" "}
            library and use{" "}
            <a href="https://stitches.dev/docs/variants" target="_blank" rel="noreferrer">
              variants functionality
            </a>
            . Do not change the TextField component code to complete the task.
          </p>
          <form action="">
            <TextField name="firstName1" label="First name" required={true} />
          </form>
        </div>
      </div>
    </>
  );
}
