import React from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg  border-2 order-2 mt-10 bg-white">
      <div className="flex flex-col justify-center items-center my-4">
        <h1 className="text-bold text-3xl">Appointment Request Form</h1>
        <p className="text-semibold ">Let us know how we can help you!</p>
      </div>
      <hr className="bg-gray-700 w-full" />
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className=" ">
          <label htmlFor="fullName" className="block my-3   ">
            Full Name
          </label>
          <div className="flex justify-center gap-4 ">
            <div className="w-full">
              <input
                {...register("firstName", { required: true, maxLength: 20 })}
                className={`w-full border-2 border-gray-400 p-2 outline-none ${
                  errors.firstName ? "border-red-500" : "hover:border-blue-200"
                }`}
              />

              {errors.firstName ? (
                <span className="text-red-500 text-sm">
                  First Name is required
                </span>
              ) : (
                <span className="text-sm mx-3">First Name</span>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("lastName", { required: true, maxLength: 20 })}
                className={`w-full border-2 border-gray-400 p-2 outline-none ${
                  errors.lastName ? "border-red-500" : "hover:border-blue-200"
                }`}
              />

              {errors.lastName ? (
                <span className="text-red-500 text-sm">
                  Last Name is required
                </span>
              ) : (
                <span className="text-sm mx-3">Last Name</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 mx-0">
            <div className="w-full">
              <label htmlFor="contactNumber" className="block my-3 ">
                Contact Number
              </label>
              <InputMask
                {...register("phoneNumber", {
                  required: true,
                })}
                mask="(999) 999-9999"
                placeholder="(___) ___-____"
                className={`w-full border-2 border-gray-400 p-2 outline-none ${
                  errors.phoneNumber
                    ? "border-red-500"
                    : "hover:border-blue-200"
                }`}
              />
              {errors.phoneNumber ? (
                <span className="text-red-500 text-sm">
                  Last Name is required
                </span>
              ) : (
                <span className="text-sm mx-3">
                  Please enter a valid phone number.
                </span>
              )}
            </div>
            <div className="w-full">
              <label htmlFor="emailAddress" className="block my-3">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  maxLength: 20,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className={`w-full border-2 border-gray-400 p-2 outline-none ${
                  errors.phoneNumber
                    ? "border-red-500"
                    : "hover:border-blue-200"
                }`}
              />
              {errors.email ? (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              ) : (
                <span className="text-sm mx-3">example@example.com</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block my-3">
            Address
          </label>
          <div className="w-full">
            <input
              {...register("streetAddress", { required: true, maxLength: 20 })}
              className={`w-full border-2 border-gray-400 p-2 outline-none ${
                errors.streetAddress
                  ? "border-red-500"
                  : "hover:border-blue-200"
              }`}
            />
            {errors.streetAddress ? (
              <span className="text-red-500 text-sm">
                Street Address is required
              </span>
            ) : (
              <span className="text-sm mx-3 ">Street Address</span>
            )}

            <input
              {...register("streetAddressLine", {
                required: true,
                maxLength: 20,
              })}
              className={`w-full border-2 mt-3 border-gray-400 p-2 outline-none ${
                errors.streetAddressLine
                  ? "border-red-500"
                  : "hover:border-blue-200"
              }`}
            />
            {errors.streetAddress ? (
              <span className="text-red-500 text-sm">
                Street Address Line 2 is Required
              </span>
            ) : (
              <span className="text-sm mx-3">Street Address Line 2</span>
            )}

            <div className="flex justify-center gap-4 ">
              <div className="w-full">
                <input
                  {...register("city", { required: true, maxLength: 20 })}
                  className={`w-full border-2 mt-3 border-gray-400 p-2 outline-none ${
                    errors.city ? "border-red-500" : "hover:border-blue-200"
                  }`}
                />
                {errors.city ? (
                  <span className="text-red-500 text-sm">City is Required</span>
                ) : (
                  <span className="text-sm mx-3">City</span>
                )}
              </div>
              <div className="w-full">
                <input
                  {...register("state", { required: true, maxLength: 20 })}
                  className={`w-full border-2 mt-3 border-gray-400 p-2 outline-none ${
                    errors.state ? "border-red-500" : "hover:border-blue-200"
                  }`}
                />
                {errors.state ? (
                  <span className="text-red-500 text-sm">
                    State / Province is Required
                  </span>
                ) : (
                  <span className="text-sm mx-3">State / Province</span>
                )}
              </div>
            </div>
            <input
              {...register("zipCode", { required: true, maxLength: 20 })}
              className={`w-full border-2 mt-3 border-gray-400 p-2 outline-none ${
                errors.zipCode ? "border-red-500" : "hover:border-blue-200"
              }`}
            />
            {errors.zipCode ? (
              <span className="text-red-500 text-sm">
                Postal / Zip Code is Required
              </span>
            ) : (
              <span className="text-sm mx-3"> Postal / Zip Code</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="userIntrest" className="block my-3">
            What services are you interested in?
          </label>
          <textarea
            {...register("userIntrest", { required: true })}
            rows="3"
            className={`w-full border-2  border-gray-400 p-2 outline-none ${
              errors.userIntrest ? "border-red-500" : "hover:border-blue-200"
            }`}
          />
          {errors.userIntrest ? (
            <span className="text-red-500  text-sm">
              Plese Mention Your field of interest{" "}
            </span>
          ) : (
            ""
          )}
        </div>

        <input
          type="submit"
          className="bg-blue-500 rounded-md mt-3 text-white p-2"
        />
      </form>
    </div>
  );
};

export default Form;
