"use client";

import { useToast } from "./toasters";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const bookingSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Booking message is required" }),
  guests: z
    .string()
    .optional()
    .refine((val) => !val || !isNaN(Number(val)), {
      message: "Guests must be a number",
    }),
  eventDate: z.string().min(1, { message: "Event date is required" }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingComponent = () => {
  const { setError, setSuccess, removeToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const handleBooking = async (data: BookingFormData) => {
    try {
      await axios.post("/api/send-booking", data, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess("Booking submitted!");
      setTimeout(() => removeToast(), 4000);
    } catch (error) {
      console.error("Booking error:", error);
      setError("Failed to submit booking");
      setTimeout(() => removeToast(), 4000);
    }
  };

  return (
    <div className="lg:h-[90%] py-10 lg:px-20 w-full flex-c-center px-4 max-w-[30em] relative">
      <h5 className="text-[2rem] mb-3 py-10">Book with Us</h5>
      <div className="w-full">
        <form onSubmit={handleSubmit(handleBooking)} className="">
          <input
            {...register("name")}
            type="text"
            placeholder="Full name"
            className="px-2 py-[.5em] w-full border rounded-md border-foreground/10 my-3"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}

          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="px-2 py-[.5em] w-full border rounded-md border-foreground/10 my-3"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("guests")}
            type="text"
            placeholder="Number of guests (optional)"
            className="px-2 py-[.5em] w-full border rounded-md border-foreground/10 my-3"
          />
          {errors.guests && (
            <p className="text-sm text-red-500">{errors.guests.message}</p>
          )}

          <input
            {...register("eventDate")}
            type="date"
            className="px-2 py-[.5em] w-full border rounded-md border-foreground/10 my-3"
          />
          {errors.eventDate && (
            <p className="text-sm text-red-500">{errors.eventDate.message}</p>
          )}

          <textarea
            {...register("message")}
            placeholder="Tell us what you're booking for..."
            className="px-2 py-[.5em] w-full border rounded-md border-foreground/10 my-3 h-[150px] resize-none"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="text-background bg-foreground hover:bg-foreground/80 cursor-pointer px-2 py-[.5em] w-full rounded-md"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingComponent;
