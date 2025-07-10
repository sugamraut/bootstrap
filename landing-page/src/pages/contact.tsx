import type { FormEvent } from "react";
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = {
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };
    console.log("Form Submission:", formValues);
    alert("Your message has been sent successfully!");
  };

  return (
    <>
      <Nabar />
      <div className="container mt-5 d-flex justify-content-center mb-4">
        <form className="form-shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-danger name-field">*</span>
            </label>
            <input
              type="text"
              className="form-control input-field-desigin"
              id="firstName"
              name="firstName"
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
              name="lastName"
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
              name="email"
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
                name="phone"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control input-field-desigin"
              id="message"
              name="message"
              rows={3}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark button-design ">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
//contact-form-button