import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page-container">
      <div className="page-heading">
        <p className="eyebrow">WE'RE HERE FOR YOU</p>
        <h1>Let's <span>Connect.</span></h1>
        <p>Questions about fragrances or your order? Send us a message.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>We'd love to hear from you.</h2>
          <p>
            Our customer support team can help with product
            information, orders and general enquiries.
          </p>

          <div className="contact-method">
            <Mail />
            <div>
              <strong>Email</strong>
              <p>support@veloura.example</p>
            </div>
          </div>

          <div className="contact-method">
            <MessageCircle />
            <div>
              <strong>Customer Care</strong>
              <p>Send us a message using the form.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input name="name" required placeholder="Enter your name" />
          </label>

          <label>
            Email Address
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              required
              placeholder="How can we help?"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Write your message..."
            />
          </label>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>

          {submitted && (
            <p className="form-notice">
              Demo form submitted. Connect a backend or email service
              to receive messages.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}