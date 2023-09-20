import React from "react";
import PageTop from "../shared/PageTop";

const Contact = () => {
  return (
    <div>
      <PageTop
        title={"Contact us"}
        description={"Our Church address and contact details"}
      />

      <div className=" container mx-auto px-8 2xl:px-0 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <form>
            <div>
              <p className="text-gray-700 text-base mb-1">Full Name</p>
              <input
                type="text"
                // placeholder="Enter your full name"
                className="w-full border border-gray-200 outline-none h-10 rounded px-5"
              />
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-base mb-1">Email ID</p>
              <input
                type="email"
                // placeholder="Enter your email "
                className="w-full border border-gray-200 outline-none h-10 rounded px-5"
              />
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-base mb-1">Phone</p>
              <input
                type="number"
                // placeholder="Enter your Phone number"
                className="w-full border border-gray-200 outline-none h-10 rounded px-5"
              />
            </div>

            <div className="mt-3">
              <p className="text-gray-700 text-base mb-1">Message</p>
              <textarea
                type="text"
                // placeholder="Enter your message"
                rows={4}
                className="w-full border border-gray-200 outline-none  rounded px-5 py-5"
              />
            </div>

            <button
              className="mt-5 w-full lg:w-auto bg-teal-700 text-white px-5 py-3 font-bold rounded hover:bg-teal-600 duration-100"
              type="submit"
            >
              {" "}
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="text-center sm:text-start">
          <h1 className="text-gray-700 text-xl mb-5 font-bold">OUR ADDRESS</h1>
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
          </div>
          <hr className="my-8" />

          <h1 className="text-gray-700 text-xl mb-5 font-bold">
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
          </div>
        </div>
      </div>

      <div>
        <iframe
          className="w-full h-96 my-10"
          frameborder="0"
          src="https://maps.google.com/maps?q=United+Hospital+Limited,+Road+No+71,+Dhaka,+Bangladesh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
