import "./Accordion.css";

const Accordion = ({ title, content, image, isOpen, onClick }) => {
  return (
    <div className="container-2-recruiter">
      <div className="accordion-item">
        <div className="accordion-header" onClick={onClick}>
          <h3>{title}</h3>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>

        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
          <div className="smart-search">
            <div className="smart-image">
              <img src={image} alt="Illustration" />
            </div>
            <div className="smart-content">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
