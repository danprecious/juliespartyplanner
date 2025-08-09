"use client";

import { useState } from "react";
import { useToast } from "./toasters";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import Image from "next/image";
import cloudinaryLoader from "@/app/lib/cloudinary";
// import Image from "next/image";
// import { cloudinaryLoader } from "@/lib/cloudinary-loader";

const orderSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
});

type OrderFormData = z.infer<typeof orderSchema>;

const products = {
  "Small Chops": [
    {
      title: "Spring Rolls",
      price: 5,
      image: "v1754738828/sj-VeK39ynd3Ac-unsplash_ta37fx.jpg",
    },
    {
      title: "Samosas",
      price: 6,
      image: "v1754737479/kabir-cheema-8T9AVksyt7s-unsplash_naenew.jpg",
    },
    {
      title: "Puff Puff",
      price: 3,
      image: "v1754737406/keesha-s-kitchen-KM9s3CNUguc-unsplash_nlu0x5.jpg",
    },
  ],
  Desserts: [
    {
      title: "Chocolate Mousse",
      price: 10,
      image: "v1754737409/ana-azevedo-Jb7Q7FISznQ-unsplash_lgrvpq.jpg",
    },
    {
      title: "Fruit Tart",
      price: 8,
      image: "v1754737410/crystal-jo-YbVyjucGKXU-unsplash_nuslxk.jpg",
    },
  ],
  Cakes: [
    {
      title: "Vanilla Cake",
      price: 20,
      image: "v1754737436/joyful-CHSJv7hRXW8-unsplash_k9wqse.jpg",
    },
    {
      title: "Chocolate Cake",
      price: 22,
      image: "v1754737406/jacob-thomas-6jHpcBPw7i8-unsplash_lzlugm.jpg",
    },
  ],
};

export default function OrderComponent() {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const { setError, setSuccess, removeToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.title === item.title);
      if (existing) {
        return prev.map((p) =>
          p.title === item.title ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setSuccess(`${item.title} added to cart`);
    setTimeout(() => removeToast(), 3000);
  };

  const removeFromCart = (title: string) => {
    setCart((prev) => prev.filter((p) => p.title !== title));
  };

  const updateQuantity = (title: string, delta: number) => {
    setCart((prev) =>
      prev.map((p) =>
        p.title === title
          ? { ...p, quantity: Math.max(1, p.quantity + delta) }
          : p
      )
    );
  };

  const handleOrder = async (data: OrderFormData) => {
    try {
      await axios.post("/api/send-order", { ...data, cartItems: cart });
      setSuccess("Order submitted successfully!");
      reset();
      setCart([]);
      setShowCart(false);
      setTimeout(() => removeToast(), 4000);
    } catch {
      setError("Failed to submit order");
      setTimeout(() => removeToast(), 4000);
    }
  };

  return (
    <div className="px-4 py-8">
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-10 ">
          <h2 className="text-xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {items.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow lg:w-[15em] min-h-[15em] overflow-hidden"
              >
                <div className="w-full  h-[68%] bg-stone-400 mb-4">
                  <Image
                    loader={cloudinaryLoader}
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-stone-800 text-white px-3 py-1 rounded hover:bg-stone-600 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Floating cart button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>

      {/* Cart panel */}
      {showCart && (
        <div className="fixed bottom-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl p-4 max-h-[80vh] overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center mb-3">
                  <div>
                    {item.title} (${item.price}) x {item.quantity}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => updateQuantity(item.title, -1)}>
                      -
                    </button>
                    <button onClick={() => updateQuantity(item.title, 1)}>
                      +
                    </button>
                    <button onClick={() => removeFromCart(item.title)}>
                      🗑
                    </button>
                  </div>
                </div>
              ))}
              <form onSubmit={handleSubmit(handleOrder)} className="mt-4">
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="border p-2 w-full mb-2"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="border p-2 w-full mb-2"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="border p-2 w-full mb-2"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
                <textarea
                  {...register("address")}
                  placeholder="Delivery Address"
                  className="border p-2 w-full mb-2"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 w-full rounded"
                >
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
