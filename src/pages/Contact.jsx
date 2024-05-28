import React, { useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const doc = {
      _type: "user",
      name: name,
      email: email,
      message:  message,
    };

    try {
      await client.create(doc);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user");
    }
  };
  return (
    <>
      <section className="bg-[#f0d829] flex min-h-screen justify-center">
        <div className="justify-center  items-center mt-10 p-12 h-[40rem] mx-3 md:w-[36rem] lg:w-[40rem]
         bg-slate-400">
          <legend>
            <h1 className="text-white text-[18px] mb-2">Contact us today for a discussion, talk or collaborative text.</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-white mb-5 md:mb-7">
              <label>First Name</label>
              <input
                type="text"
                value={name}
                className="w-[25rem] h-[3rem] bg-[#e8e2e2] text-black 
                border border-1 focus:border-[#3e1943] border-[#3e1943] md:w-[30rem] lg:w-[35rem]"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-white mb-5 md:mb-7">
              <label>Email</label>
              <input
                type="email"
                value={email}
                className="w-[25rem] h-[3rem] bg-[#e8e2e2] text-black 
                border border-1 focus:border-[#3e1943] border-[#3e1943] md:w-[30rem] lg:w-[35rem]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-white mb-5 md:mb-7">
              <label>Message</label>
              <input
                type="text"
                value={message}
                className="w-[25rem] text-start h-[10rem] bg-[#e8e2e2] text-black 
                border border-1 focus:border-[#3e1943] border-[#3e1943] md:w-[30rem] lg:w-[35rem] lg:h-[12rem]"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit"
             className="inline-block  px-5 py-3 text-sm font-medium text-center
             bg-white border border-[#3e1943]  transition-all duration-500
             hover:text-white hover:bg-[#3e1943] text-[#3e1943] rounded-lg"
            >Submit</button>
           
          </form>
          </legend>
          
        </div>
      </section>
      <div className="flex flex-col">
        <span className="inline-flex mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className=" text-[#3e1943]"
            fill="currentColor"
            class="bi bi-envelope-at-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
          </svg>
          <h4 className=" text-[#3e1943] pl-6">victanywuan304@gmail.com</h4>
        </span>

        {/* instagram */}
        <span
          className="inline-flex mb-5
            space-x-8   text-[#3e1943]
             md:space-y-8"
        >
          <Link to="@Black-rays">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-instagram"
              className=" text-[#3e1943]"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </Link>

          {/* X-twitter */}
          <Link to="@Black-rays">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="  text-[#3e1943]
                hover:fill-slate-700 md:-mt-8"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </Link>

          {/* Github */}
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className=" text-[#3e1943] md:-mt-8"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Contact;
