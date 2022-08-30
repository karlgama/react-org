import "./TextField.css";

const TextField = (props) => {

  const keyPressHandler = (event) => {
    props.setValue(event.target.value);
  };
  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input
        value={props.value}
        onChange={keyPressHandler}
        required={props.required}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default TextField;
