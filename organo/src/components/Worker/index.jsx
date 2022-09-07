import "./Worker.css";

const Worker = ({ name, role, img, color }) => {
  return (
    <div className="worker">
      <div className="header" style={{ backgroundColor: color }}>
        <img src={img} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Worker;
