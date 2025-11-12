import { Briefcase, ChevronDown, ChevronUp, Mail, MapPin } from "lucide-react";
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
            <div>
              <div className="additInfo-line">
                <Mail width={16} height={16} />
                <p>Email: {data.email}</p>
              </div>
              <div className="additInfo-line">
                <MapPin width={16} height={16} />
                <p>
                  Address: {data.address.suite}, {data.address.street}{" "}
                  {data.address.city} {data.address.zipcode}
                </p>
              </div>
              <div className="additInfo-line">
                <Briefcase width={16} height={16} />
                <p>Company: {data.company.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
