"use client";

import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "react-use-cart";

export default function CheckoutPage() {
  const { cartTotal, items } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-16">
      <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-black">
        <Image
          src="/menubg.png"
          alt="Menu Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Checkout </h1>
          <p className="text-sm sm:text-base text-white flex items-center space-x-2 group">
            <Link href={"/"}>
              <span className="transition-colors duration-300">Home</span>
            </Link>
            <ChevronRight size={16} className="text-white transition-colors duration-300 group-hover:text-orange-500" />
            <span className="transition-colors duration-300 text-[#FF9F0D]">Checkout</span>
          </p>
        </div>
      </div>




    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-28">
      {/* Shipping Address */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Choose country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
          <input
            type="text"
            name="address1"
            placeholder="Address 1"
            value={formData.address1}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-sm">
          After completing the order, the product will be delivered to your
          address within 1-2 hours. Currently, only cash on delivery is
          available. In the future, we will add more payment methods ASAP.
        </p>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="border p-4 rounded shadow">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <Image
                src={item.image ? urlFor(item.image).url() : "/placeholder.png"}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md object-cover"
              />
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p>${item.price * (item.quantity ?? 1)}</p>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${cartTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Charges:</p>
              <p>Free Delivery</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>${cartTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
