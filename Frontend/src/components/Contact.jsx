import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Contact = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setMessage(
      `Message sent! Name: ${data.name}, Email: ${data.email}, Message: ${data.message}`
    );
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
              aria-label="Close">
              ✕
            </Link>
            <h3 className="font-bold text-2xl">Contact Us</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Message */}
            <div className="mt-4 space-y-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Type your message"
                className="w-full px-3 py-6 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Submit Button */}
            <div className="mt-4 space-y-2">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 border border-green-200 rounded-md">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
