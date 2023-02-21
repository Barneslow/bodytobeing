import styles from "./CustomInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomInput = ({ field, form: { touched, errors }, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];
  const completed = touched[field.name] && !errors[field.name];

  const { icon } = props;

  return (
    <>
      <div
        animate={{
          border: completed
            ? "1px solid var(--blue)"
            : hasError
            ? "1px solid red"
            : "1px solid white",
        }}
        transition={{ duration: 1 }}
        style={{
          border: completed
            ? "1px solid var(--blue)"
            : hasError
            ? "1px solid red"
            : "1px solid white",
        }}
        className={styles["form-input"]}
      >
        <span>
          <FontAwesomeIcon
            icon={icon}
            style={{
              color: completed
                ? "var(--blue)"
                : hasError
                ? "var(--red)"
                : "var(--dark-purple)",
            }}
          />
        </span>
        <input type="text" {...field} {...props} />
      </div>
      {hasError && (
        <div className={styles["error-text"]}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default CustomInput;
