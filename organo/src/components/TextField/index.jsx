import "./TextField.css";

const TextField = (props) => {
  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input placeholder={props.placeholder} type="text" />
    </div>
  );
};

export default TextField;
