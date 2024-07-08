import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
            onClick={onClose}>
            ✕
          </Link>
          <h3 className="font-bold text-2xl dark:text-black">Login</h3>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span className="dark:text-black">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span className="dark:text-black">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none dark:text-black"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p className="dark:text-black">
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer">
                sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
