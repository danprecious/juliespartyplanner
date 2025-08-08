import BookingComponent from "@/app/_components/sections/booking";
import { Toast } from "@/app/_components/sections/toasters";
import React from "react";

const BookingPage = () => {
  return (
    <section className="flex items-center flex-col relative">
      <Toast />
      <BookingComponent />
    </section>
  );
};

export default BookingPage;
