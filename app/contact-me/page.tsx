import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(24860.jpg)" }}
        className="h-[60%] w-[90%] md:w-[80%] lg:h-[70%] xl:h-[60%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-5 bottom-8 w-[90%] md:left-10 md:bottom-10 md:w-[60%] lg:left-20 lg:bottom-16 lg:w-[40%] xl:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
