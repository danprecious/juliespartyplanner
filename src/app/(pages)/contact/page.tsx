import ContactComponent from "@/app/_components/sections/contactForm";
import { Toast } from "@/app/_components/sections/toasters";
import React from "react";

const ContactPage = () => {
  return (
    <section className="flex items-center flex-col relative">
      <Toast />
      <ContactComponent />
    </section>
  );
};

export default ContactPage;
