import BookingComponent from "@/app/_components/sections/booking";
import OrderComponent from "@/app/_components/sections/orderComponent";
import { Toast } from "@/app/_components/sections/toasters";
import React from "react";

const BookingPage = () => {
  return (
    <section className="flex items-center flex-col relative">
      <Toast />
      <BookingComponent />

      <section className="lg:py-20 py-8 lg:px-10 px-3">
        <h2 className="text-[2rem] font-bold">Order Something Now!</h2>
        <OrderComponent />
      </section>
    </section>
  );
};

export default BookingPage;
