import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";
import { styles } from "../style";
import { Footers } from "../Components/Footer";
import { toast } from "react-toastify";

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    work: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS functionality
    emailjs
      .send(
        "service_r94x75r", // Replace with your EmailJS Service ID
        "template_q7ockav", // Replace with your EmailJS Template ID
        {
          from_name: form.name,
          to_name: "MosinBalsing", // Replace with your name
          from_email: form.email,
          to_email: "mosinbalsing@gmail.com", // Replace with your email
          mobile: form.mobile,
          work: form.work,
          message: form.message,
        },
        "eHUyMwh9N8auZeMYo" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("Email sent successfully!"); // Show success toast
          setLoading(false);
          setForm({
            name: "",
            email: "",
            mobile: "",
            work: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send email. Please try again."); // Show error toast
          setLoading(false);
        }
      );    
  };

  return (
    <div
      className={`px-6 sm:px-12 py-10 xl:mt-12 flex xl:flex-row  flex-col gap-10   `}
      id="contact"
    >
      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[1] sm:flex-[0.75] bg-black-600 p-6 sm:p-8 rounded-2xl shadow-lg xl:scale-100 sm:scale-75"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6 scale-100"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-gray-100 py-3 px-4 rounded-lg text-black outline-none font-medium"
              required
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-100 py-3 px-4 rounded-lg text-black outline-none font-medium"
              required
            />
          </label>

          {/* Mobile */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Mobile Number</span>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Your mobile number"
              className="bg-gray-100 py-3 px-4 rounded-lg text-black outline-none font-medium"
              required
            />
          </label>

          {/* Work */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Work</span>
            <select
              name="work"
              value={form.work}
              onChange={handleChange}
              className="bg-gray-100 py-3 px-4 rounded-lg text-black outline-none font-medium"
              required
            >
              <option value="" disabled>
                Select your work
              </option>
              <option value="Doors">Doors</option>
              <option value="Furniture">Furniture</option>
              <option value="Gates">Gates</option>
              <option value="Grills">Grills</option>
              <option value="Shades">Shades</option>
              <option value="Shutters">Shutters</option>
              <option value="Steps">Steps</option>
            </select>
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-gray-100 py-3 px-4 rounded-lg text-black outline-none font-medium"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 py-3 px-6 rounded-lg text-white font-bold shadow-md hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Map Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 w-full xl:h-auto md:h-[550px] h-[350px] "
      >
        <div className="map-container rounded-xl overflow-hidden h-[50%] shadow-lg xl:block sm:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.99355005482!2d73.85546747503568!3d18.438601982639124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eba1e7dc82d7%3A0xfe57f658b2cd9e56!2sGalaxy%20Fabrication!5e0!3m2!1sen!2sin!4v1732429229833!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Footers />
      </motion.div>
    </div>
  );
};
