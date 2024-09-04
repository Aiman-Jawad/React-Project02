import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={props.isEmail_Btn ? styles.Email_Btn : styles.primary_btn}
    >
      {props.icon}
      {props.text}
    </button>
  );
}

export default Button;
