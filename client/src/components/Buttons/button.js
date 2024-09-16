import "./signInButton.scss";
import "./button.scss";

function Button({ type, classes, label, link }) {
  if (link) {
    return (
      <a href={link} className={classes}>
        {label}
      </a>
    );
  } else {
    return (
      <button type={type} className={classes}>
        {label}
      </button>
    );
  }
}

export default Button;
