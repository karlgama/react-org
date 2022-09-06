import "./TextField.css";

const TextField = (props) => {

  const onChangeHandler = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input
        value={props.value}
        onChange={onChangeHandler}
        required={props.required}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default TextField;
