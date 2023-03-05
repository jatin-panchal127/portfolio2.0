import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const apikey = import.meta.env.VITE_APIKEY;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const toName = import.meta.env.VITE_TO_NAME;
  const toEmail = import.meta.env.VITE_TO_EMAIL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: toName,
          from_email: form.email,
          to_email: toEmail,
          message: form.message,
        },
        apikey
      )
      .then(() => {
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        console.log("error");
        alert("Something went wrong, Please try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            placeholder="What's Your Name?"
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            required
          />
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            placeholder="What's Your Email?"
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            required
          />
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
          </label>
          <textarea
            rows={"7"}
            name="message"
            id="message"
            value={form.message}
            placeholder="What do you want to say?"
            onChange={handleChange}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            required
          />
          <button
            type="submit"
            className="bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
