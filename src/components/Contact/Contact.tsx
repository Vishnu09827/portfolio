// components/Contact/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className={styles.wrapper}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.info}
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me for any questions or opportunities.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span>Email:</span>
                <a href="mailto:vishnumariappan259@gmail.com">vishnumariappan259@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <span>Phone:</span>
                <a href="tel:+919360714052">+91 9360714052</a>
              </div>
              <div className={styles.contactItem}>
                <span>Location:</span>
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                Message sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                Failed to send message. Please try again.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
