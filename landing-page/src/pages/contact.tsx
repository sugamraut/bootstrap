import type { FormEvent } from "react";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    alert("Your message has been sent successfully!");
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <form className="form-shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control input-field-desigin"
              id="firstName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control input-field-desigin"
              id="lastName"
            />
          </div>
          <div className="mb-3 postion-relative">
            <label htmlFor="email" className="form-label">
              E-Mail <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control input-field-desigin contact-email-section"
              id="email"
              placeholder="@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <img
                  src="https://flagcdn.com/16x12/gb.png"
                  alt="UK Flag"
                  className="number-section"
                />{" "}
                +44
              </span>
              <input
                type="tel"
                className="form-control input-field-desigin"
                id="phone"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label ">
              Message
            </label>
            <textarea
              className="form-control input-field-desigin"
              id="message"
              rows={3}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark contact-form-button">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
