"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface formDataProps {
  fullName: string;
  contact: any;
  emailAddress: any;
  message: any;
  serviceType: any;
  shootDate: any;
  location: any;
}

export default function EmailForm() {
  //Get Current Date for the Sender Identification
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const mytoday = mm + dd + yyyy;
  const newtoday = mm + dd;

  const [SubmitBtn, setSubmitBtn] = useState("Submit Message");
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [shootDate, setShootDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  // const messageID = `#${project.slice(0, 1)}${newtoday}${contact.slice(
  //   -3
  // )}${firstName.slice(0, 3)}`;
  const [copied, setCopied] = useState(false);
  const [complete, setComplete] = useState(false);

  const formData = {
    fullName,
    contact,
    emailAddress,
    message,
    serviceType,
    shootDate,
    location,
  };

  // when form is submitted
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitBtn("Submitting...");
    try {
      const res = await fetch("/api/ContactEmail", {
        method: "POST",
        headers: {
          "Content-Type": "Aplication/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res.status);
      if (res.status === 200) {
        setSubmitBtn("Message Submitted");
      }
    } catch (error) {
      console.log(1);
      console.log(error);
      setSubmitBtn("Try Again");
    }
    console.log("Message Sent 🚀🚀🚀");
  };

  //copy to clipboard
  // const copyToClipBoard = () => {
  //   if (messageID) {
  //     navigator.clipboard.writeText(`${messageID} `);
  //     setCopied(true);
  //   } else {
  //     setCopied(false);
  //   }
  // };

  useEffect(() => {
    if (
      fullName.length > 0 &&
      contact.length > 0 &&
      emailAddress.length > 0 &&
      message.length > 0
    ) {
      setComplete(true);
    } else {
      setComplete(false);
    }

    // return () => {
    //   second
    // }
  }, [fullName.length, contact.length, emailAddress.length, message.length]);

  // console.log(formData);
  return (
    <div className="flex flex-col items-center px-4 py-10 md:items-start">
      <form
        action="submit"
        onSubmit={handleOnSubmit}
        className="w-full md:max-w-5xl"
      >
        {/* Client Details form */}
        <div className="">
          {/* Full Name */}
          <div className="py-1">
            <label htmlFor="FullName" className="px-2 pb-1">
              Full Name
            </label>
            <input
              type="text"
              name="FullName"
              required
              onChange={(event: any) => {
                setFullName(event.target.value);
              }}
              className="w-full border-2 p-2 outline-none"
              placeholder="Enter Full Name"
            />
          </div>
          {/* Contact */}
          <div className="py-1">
            <label htmlFor="Contact" className="px-2 pb-1">
              Contact
            </label>
            <input
              type="tel"
              name="Contact"
              required
              onChange={(event: any) => {
                setContact(event.target.value);
              }}
              className="w-full border-2 p-2 outline-none"
              placeholder="Enter Contact"
            />
          </div>
          {/* Email Address */}
          <div className="py-1">
            <label htmlFor="Email" className="px-2 pb-1">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              required
              onChange={(event: any) => {
                setEmailAddress(event.target.value);
              }}
              className="w-full border-2 p-2 outline-none"
              placeholder="Enter Email Address"
            />
          </div>
          {/* Type of service */}
          <div className="py-2">
            <label htmlFor="Service Type" className="px-2 pb-1">
              Type Of Service
            </label>
            <select
              name="cars"
              id="cars"
              required
              onChange={(event: any) => {
                setServiceType(event.target.value);
              }}
              className="w-full border-2 p-2 outline-none"
            >
              <option value="p1">Package 1</option>
              <option value="p2">Package 2</option>
              <option value="p3">Package 3</option>
              <option value="p4">Package 4</option>
            </select>
          </div>
          {/* Date */}
          <div className="py-1">
            <label htmlFor="Date" className="px-2 pb-1">
              Date For Photoshoot
            </label>
            <input
              type="date"
              name="Email"
              required
              onChange={(event: any) => {
                setShootDate(event.target.value);
              }}
              className="w-full border-2 p-2 outline-none"
              placeholder="Pick Date"
            />
          </div>
          {/* Location Details */}
          <div className="py-1">
            <label htmlFor="Email" className="px-2 pb-1">
              Location Details
            </label>
            <input
              type="text"
              name="LocationDetails"
              required
              onChange={(event: any) => {
                setLocation(event.target.value);
              }}
              className="w-full border-2 p-2 outline-none"
              placeholder="Enter Location Details"
            />
          </div>
          {/* Tell Us about Your Event */}
          <div className="py-2">
            <label htmlFor="Message" className="flex flex-col px-2 pb-1">
              <span>Leave A Message</span>
              <span className="text-sm text-accent/50">
                Kindly tell us a little more about you, the service you require
                from us and your vision. Indicating the locations involved,
                nature of the job, interested package/offers and budget as well
                as other important information you deem fit to let us know
              </span>
            </label>
            <textarea
              name="message"
              onChange={(event: any) => {
                setMessage(event.target.value);
              }}
              placeholder="Enter Message"
              maxLength={5000}
              className="w-full border-2 p-2 outline-none"
              spellCheck="false"
            />
          </div>
        </div>
        {/* submit btn */}
        <div className=" flex flex-col items-center md:flex-row">
          <div className="flex w-full md:w-fit">
            {complete ? (
              <input
                id="submit"
                type="submit"
                value={SubmitBtn}
                className="w-full cursor-pointer border-2 bg-accent px-4 py-2 text-white hover:bg-transparent hover:text-accent md:w-fit"
              />
            ) : (
              <input
                id="submit"
                type="submit"
                value={`Enter Details`}
                disabled
                className=" w-full cursor-not-allowed border-2 px-4 py-2 md:w-fit"
              />
            )}
          </div>
          <div className=" px-2">
            <span className="px-1">By Submiting You Agree to the</span>
            <Link
              href={"/TermsAndConditions"}
              className="underline hover:text-accent"
            >
              Terms And Conditions
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
