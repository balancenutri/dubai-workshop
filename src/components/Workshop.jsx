import React from "react";
import BannerImage from "../assets/banner_image.png";
import { FiCalendar } from "react-icons/fi";
import { GiPositionMarker } from "react-icons/gi";
import { FaClipboardCheck, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function WorkshopCard({ setModalControl }) {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-4">
    <div className="w-full max-w-md bg-white p-4 shadow-lg rounded-xl">
      <h1 className="text-lg sm:text-xl  text-center bg-[#3FBEC9] -mx-4 -mt-6 py-4 font-bold text-white mb-4 rounded-t-xl">
        Nutrition Workshop hosted by IWD
      </h1>
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center mb-4 md:mb-3 overflow-hidden rounded-lg">
        <img
          alt="Workshop Image"
          className="object-cover w-full h-full "
          height="400"
          src={BannerImage}
          width="600"
        />
      </div>
      <div className="text-center mb-4">
        <div className="rounded-lg bg-yellow-50 py-2">
          <h2 className="text-lg  font-semibold text-gray-800 underline">
            Workshop Topic:
          </h2>
          <h2 className="text-lg  font-semibold text-gray-800">
            How to lose weight without
            <br />
            going to the gym?
          </h2>
        </div>
        <div className="flex flex-col items-start justify-between rounded-lg p-4 bg-white gap-y-3 mt-3 border">
          <div className="flex items-center space-x-3">
            <div className="text-green-600 flex text-2xl w-7">
              <FiCalendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-red-600 font-semibold">29th Jan, 10:30 AM</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="text-blue-600 text-2xl w-7">
              <FaLocationDot className="w-6 h-6" />
            </div>
            <div>
              <p className="md:text-base text-gray-800 font-semibold">
                India Club, Dubai
              </p>
            </div>
          </div>
        </div>
        <p className="text-black-600 my-4 md:my-3 underline">
          <span className="text-black text-lg font-bold">
            Registration fee:{" "}
          </span>
          <span className="text-red-500 text-xl font-bold">50 AED</span>
        </p>
      </div>
      <div className="flex justify-center mb-6 md:mb-3">
        <button
          className="bg-[#FFB412] text-black px-6 py-3 md:py-1 rounded-full transition duration-300 flex items-center"
          onClick={() => setModalControl(true)}
        >
          <FaClipboardCheck className="mr-2" />
          <span className="font-bold md:text-lg">Register Now</span>
        </button>
      </div>
      <div>
        <p className="text-sm font-regular bg-orange-50 p-2 text-black text-center rounded-lg">
          <span className="font-bold">50 AED </span>fully redeemable upon
          enrolling in our online diet program.
        </p>
      </div>
      <p className="font-medium mt-2 text-black text-center">
        For more details contact Ritu:
      </p>
      <p className="text-center">
        <Link
          to={`https://wa.me/+917021985258?text=Hi, I’d like to book an appointment with Khyati in Dubai. Please let me know the available slots. Thank you!`}
          className="text-base text-blue-500 underline font-medium"
          target="_blank"
        >
          +91 7021985258
        </Link>
      </p>
    </div>
    // </div>
  );
}
