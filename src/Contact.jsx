import { ChevronDown, ChevronUp } from "lucide-react";
import "./Contact.css";
import { useState } from "react";

function Contact({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpansion = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div className="contact-body" onClick={toggleExpansion}>
      <div className="contact-upper">
        <div className="contact-info">
          <div className="contact-name">{data.name}</div>
          <div className="contact-phone">{data.phone} </div>
        </div>
        <div className="contact-btn">
          {isOpen ? (
            <ChevronUp className="collapse-btn" width={18} height={18} />
          ) : (
            <ChevronDown className="collapse-btn" width={18} height={18} />
          )}
        </div>
      </div>
      <div className="contact-lower">
        <div className="additInfo">
          <div className={`additInfo-body ${isOpen ? "expanded" : ""}`}>
            <p>
              email: {data.email}
              <br />
              Address: {data.address.suite}, {data.address.street}{" "}
              {data.address.city} {data.address.zipcode}
              <br />
              Company: {data.company.name}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
