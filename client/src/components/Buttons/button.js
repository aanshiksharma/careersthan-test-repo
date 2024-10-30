import "./signInButton.scss";
import "./button.scss";

function Button({ type, classes, imgLink, label, link }) {
  if (imgLink) {
    if (link) {
      return (
        <a href={link} className={classes}>
          <img src={imgLink} alt="" />
          {label}
        </a>
      );
    } else {
      return (
        <button type={type} className={classes || "btn"}>
          <img src={imgLink} alt="" />
          {label}
        </button>
      );
    }
  } else {
    if (link) {
      return (
        <a href={link} className={classes}>
          {label}
        </a>
      );
    } else {
      return (
        <button type={type} className={classes || "btn"}>
          {label}
        </button>
      );
    }
  }
}

export default Button;
