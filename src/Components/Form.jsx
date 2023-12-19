import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg  border-2 order-2 mt-10 bg-white">
      <div className="flex flex-col justify-center items-center mb-4">
        <h1>Appointment Request Form</h1>
        <p>Let us know how we can help you!</p>
      </div>
      <hr className="bg-gray-700 w-full" />
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className=" ">
          <label htmlFor="fullName" className="block mt-3   ">
            Full Name
          </label>
          <div className="flex justify-center gap-4 p-2">
            <div className="w-full">
              <input
                {...register("firstName", { required: true, maxLength: 20 })}
                className={`w-full border-2 border-gray-400 p-2 outline-none ${
                  errors.firstName ? "border-red-500" : "hover:border-blue-200"
                }`}
              />
              <span className="text-sm mx-3">First Name</span>
              {errors.firstName && (
                <span className="text-red-500 text-sm">
                  First Name is required
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("lastName", { required: true, maxLength: 20 })}
                className="w-full border-2 border-gray-400 p-2 "
              />
              <span className="text-sm mx-3">Last Name</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 p-2 mx-0">
            <div className="w-full">
              <label htmlFor="contactNumber" className="block mb-3 ">
                Contact Number
              </label>
              <input
                {...register("phoneNumber", { required: true, maxLength: 20 })}
                className="w-full  border-gray-400 p-2 border-2 hover:border-blue-200"
              />

              <span className="text-sm mx-3">
                Please enter a valid phone number.
              </span>
            </div>
            <div className="w-full">
              <label htmlFor="emailAddress" className="block mb-3">
                Email Address
              </label>
              <input
                {...register("lastName", { required: true, maxLength: 20 })}
                className="w-full border-2 border-gray-400 p-2"
              />
              <span className="text-sm mx-3">example@example.com</span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block mb-3">
            Address
          </label>
          <div className="w-full">
            <input
              {...register("streetAddress", { required: true, maxLength: 20 })}
              className="w-full border-2 border-gray-400 p-2 hover:border-blue-200"
            />
            <label htmlFor="streetAddress" className="block mb-3">
              Street Address
            </label>
            <input
              {...register("streetAddressLine", {
                required: true,
                maxLength: 20,
              })}
              className="w-full border-2 border-gray-400 p-2  hover:border-blue-200"
            />
            <span className="text-sm mx-3">Street Address Line 2</span>
            <div className="flex justify-center gap-4 p-2">
              <div className="w-full">
                <input
                  {...register("city", { required: true, maxLength: 20 })}
                  className="w-full border-2 border-gray-400 p-2  hover:border-blue-200"
                />
                <span className="text-sm mx-3">City</span>
              </div>
              <div className="w-full">
                <input
                  {...register("state", { required: true, maxLength: 20 })}
                  className="w-full border-2 border-gray-400 p-2 "
                />
                <span className="text-sm mx-3">State / Province</span>
              </div>
            </div>
            <input
              {...register("zipCode", { required: true, maxLength: 20 })}
              className="w-full border-2 border-gray-400 p-2  hover:border-blue-200"
            />
            <span className="text-sm mx-3"> Postal / Zip Code</span>
          </div>
        </div>

        <div>
          <label htmlFor="userIntrest" className="block">
            What services are you interested in?
          </label>
          <textarea
            {...register("userIntrest", { required: true })}
            className="w-full border-2 border-gray-400 p-2"
            rows="3"
          />
        </div>

        <input
          type="submit"
          className="bg-blue-500 rounded-md  text-white p-2"
        />
      </form>
    </div>
  );
};

export default Form;
