import { CONTACT } from "../constants";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    if (!document.getElementById("sheetdb_snippets_script")) {
      const script = document.createElement("script");
      script.id = "sheetdb_snippets_script";
      script.src = "https://sheetdb.io/snippets.js";
      script.type = "module";
      document.body.appendChild(script);
    }

    const formContainer = document.getElementById("sheetdb-form-container");
    if (formContainer && !document.getElementById("sheetdb-form")) {
      formContainer.innerHTML = `<sheetdb-form class="text-white"
        id="sheetdb-form"
        api-id='2aoblnzxv5m6q' 
        fields='[
          {"visable":"1","name":"Name","placeholder":"Name","type":"text","required":"","options":""},
          {"visable":"1","name":"Email","placeholder":"Email","type":"text","required":"","options":""},
          {"visable":"1","name":"Message","placeholder":"Message","type":"text","required":"","options":""}
        ]'
        config='{
          "justifyContent":"center",
          "width":"w-700px",
          "submitLabel":"Send Message",
          "successMessage":"Thank you.",
          "redirectUrl":"",
          "background":"transparent"
        }'>
      </sheetdb-form>`;
    }
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="my-10 text-center text-4xl font-bold text-white"
      >
        Get in Touch
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10 flex justify-center w-full"
      >
        <div id="sheetdb-form-container" className="w-full max-w-2xl"></div>
      </motion.div>

      <motion.p
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{ duration: 1}}
        className="text-center mt-8 text-neutral-400"
      >
        Feel free to reach out via email or phone. We’d love to hear from you!
      </motion.p>

      <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: 100}}
        transition={{ duration: 1}}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b text-cyan-500 hover:text-cyan-700">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
