import "./ControlButton.css";

const ControlButton = ({ type, onClick }) => {
  return (
    <button onClick={onClick} className={`controls-btn ${type}`}>
      {type === "complete-btn" ? "✔️" : "❌"}
    </button>
  );
};

export default ControlButton;
