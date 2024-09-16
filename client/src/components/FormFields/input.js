import "./input.scss";

function InputField({ type, label, id, name, placeholder, required }) {
  return (
    <fieldset className="inputField">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </fieldset>
  );
}

export default InputField;
