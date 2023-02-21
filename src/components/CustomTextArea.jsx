import styles from "./CustomInput.module.css";

const CustomTextArea = ({
  field,
  onBlur,
  form: { touched, errors },
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];
  const completed = touched[field.name] && !errors[field.name];

  return (
    <>
      <div
        style={{ border: !hasError && completed && "1px solid var(--blue)" }}
        className={styles["form-input"]}
      >
        <textarea
          type="text"
          {...field}
          {...props}
          placeholder="Write me a message. You’ll get a response within 24 hours :)"
          style={{
            border: completed
              ? "1px solid var(--blue)"
              : hasError
              ? "1px solid red"
              : "1px solid white",
          }}
        />
      </div>
      {hasError && (
        <div className={styles["error-text"]}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomTextArea;
