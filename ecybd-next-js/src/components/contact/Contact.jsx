"use client";

import React, { useRef, useState } from "react";
import PageTop from "../shared/PageTop";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaMessage, setCaptchaMessage] = useState(null); // ["Please verify you are a human."
  const [formSubmitting, setFormSubmitting] = useState(false);

  const reCaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (captchaValue === null) {
      setCaptchaMessage("Please verify you are a human.");
    } else {
      try {
        setFormSubmitting(true);
        const result = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          data,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        setFormSubmitting(false);
        toast.success("Email sent successfully", { theme: "dark" });
      } catch (e) {
        setFormSubmitting(false);
        toast.error("Something went wrong. Please try again.", {
          theme: "dark",
        });
      }

      reset();
      setCaptchaValue(null);
      reCaptchaRef?.current?.reset();
    }
  };

  const onReCAPTCHAChange = (captchaValue) => {
    setCaptchaValue(captchaValue);
    setCaptchaMessage(null);
  };

  return (
    <div>
      <ToastContainer />
      <PageTop
        title={"Contact us"}
        description={"Our Church address and contact details"}
      />

      <div className=" container mx-auto px-8 2xl:px-0 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p className="text-gray-700 text-base mb-1">Full Name</p>
              <input
                type="text"
                className="w-full border border-gray-200 outline-none h-10 rounded px-5"
                {...register("name", { required: "Name is required" })}
              />

              {errors.name?.type === "required" && (
                <p className="text-sm text-red-600">
                  {errors?.name?.message || "Full name is required"}
                </p>
              )}
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-base mb-1">Email ID</p>
              <input
                type="email"
                // placeholder="Enter your email "
                className="w-full border border-gray-200 outline-none h-10 rounded px-5"
                {...register("email", { required: "Email is required" })}
              />

              {errors?.email?.type === "required" && (
                <p className="text-sm text-red-600">
                  {errors?.email?.message || "Email is required"}
                </p>
              )}
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-base mb-1">Phone</p>
              <input
                type="number"
                className="w-full border border-gray-200 outline-none h-10 rounded px-5"
                {...register("phone")}
              />
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-base mb-1">Message</p>
              <textarea
                type="text"
                // placeholder="Enter your message"
                rows={4}
                className="w-full border border-gray-200 outline-none  rounded px-5 py-5"
                {...register("message", { required: "Message is required" })}
              />

              {errors?.message?.type === "required" && (
                <p className="text-sm text-red-600">
                  {errors?.message?.message || "Message is required"}
                </p>
              )}
            </div>

            {/* Google ReCaptcha */}
            {/* <div
              className="captcha"
              style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
            > */}
            <ReCAPTCHA
              className="mt-3"
              ref={reCaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
            {/* </div> */}

            <p className="text-sm text-red-600">{captchaMessage || ""}</p>

            <button
              disabled={formSubmitting}
              className="mt-5 w-full lg:w-auto bg-teal-700 text-white px-5 py-3 font-bold rounded hover:bg-teal-600 duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              {formSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
        <div className="text-center sm:text-start">
          <h1 className="text-gray-700 text-xl mb-5 font-bold">OUR ADDRESS</h1>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="text-base text-gray-600">
              <p>CBCB Centre</p>
              <p>Asadgate</p>
              <p>Dhaka</p>
            </div>
            <div className="text-base text-gray-600">
              <p>
                Phone: <a href="tel:01743452800">01743452800</a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto: ec_y2009@yahoo.com
"
                >
                  ec_y2009@yahoo.com
                </a>
              </p>
            </div>
          </div>
          {/* <hr className="my-8" /> */}

          {/* <h1 className="text-gray-700 text-xl mb-5 font-bold">
            ANOTHER ADDRESS
          </h1>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div className="text-base text-gray-600">
              <p>Catholic Church</p>
              <p>121 King Street, Melbourne</p>
              <p>Victoria 3000 Australia</p>
            </div>
            <div className="text-base text-gray-600">
              <p>
                Phone: <a href="tel:+6138766284">+6138766284</a>
              </p>
              <p>Fax: +6138766284</p>
              <p>
                Email:{" "}
                <a href="mailto: mail@catholicwebsite.com">
                  mail@catholicwebsite.com
                </a>
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div>
        {/* <iframe
          className="w-full h-96 my-10"
          frameBorder="0"
          src="https://maps.google.com/maps?q=United+Hospital+Limited,+Road+No+71,+Dhaka,+Bangladesh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.664616155194!2d90.3693084!3d23.759336400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf568d878835%3A0x348553983366710!2sCBCB%20Auditorium!5e0!3m2!1sen!2sbd!4v1699295502639!5m2!1sen!2sbd"
          className="w-full h-96 my-10"
          frameBorder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
