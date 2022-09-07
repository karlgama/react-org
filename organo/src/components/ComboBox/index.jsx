import "./Combobox.css";

const Combobox = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <select onChange={e=>props.setValue(e.target.value)} value={props.value} name="" id="">
        <option value=""></option>
        {props.itens.map(item => 
          <option key={item}>{item}</option>
        )}
      </select>
    </div>
  );
};

export default Combobox;
