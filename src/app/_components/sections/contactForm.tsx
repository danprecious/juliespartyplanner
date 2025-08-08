"use client";

import { usePathname, useRouter } from "next/navigation";

import axios from "axios";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "./toasters";

const ContactComponent = () => {
  const router = useRouter();
  const path = usePathname();
  const [email, setEmail] = useState("");

  const { toast, setError, setSuccess, removeToast } = useToast();

  const emailSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message cannot be empty" }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const handleEmailAuth = async (data: { email: string; message: string }) => {
    try {
      console.log(data, data.email);

      if (!data.email && !data.message) {
        return;
      }

      const response = await axios.post(
        "/api/send-mail",
        { email: data.email, message: data.message },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);

      setSuccess("Message Sent");

      setTimeout(() => {
        removeToast();
      }, 4000);
    } catch (error) {
      console.error("Error Sending Message");
      setError("Error Sending Message");
      setTimeout(() => {
        removeToast();
      }, 4000);
    }
  };

  return (
    <div className="lg:h-[90%] py-10 lg:px-20 w-full flex-c-center px-4 max-w-[30em] relative">
      <h5 className="text-[2rem] mb-3 py-10">Leave Us a Message</h5>
      <div className="w-full">
        <form onSubmit={handleSubmit(handleEmailAuth)} className="">
          <input
            {...register("email")}
            type="email"
            name="email"
            id=""
            placeholder="yourname@demo.com"
            className="px-2 py-[.5em] w-full border-[1px] rounded-md border-foreground/10 my-3"
          />
          <div className="">
            <textarea
              {...register("message")}
              name="message"
              id="message"
              placeholder="Your message here"
              className="px-2 py-[.5em] w-full border-[1px] rounded-md border-foreground/10 my-3 h-[150px] resize-none"
            ></textarea>
          </div>
          {
            <p className="text-center">
              {errors.email?.message ? errors.email?.message : ""}
            </p>
          }
          <button
            type="submit"
            className={`text-background bg-foreground hover:bg-foreground/80 cursor-pointer  px-2 py-[.5em] w-full rounded-md`}
          >
            Leave a Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
