import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          Course: <strong>CORE 1010 - Imagining Exile</strong>
        </p>
        <p className="text-lg mt-2">
          Instructor: <strong>Noha Khafagi</strong>
        </p>
        <div className="mt-4">
          <p className="text-lg">Team Members:</p>
          <p className="text-lg mt-2">
            <strong>Ramy Awad</strong> -{" "}
            <a
              href="mailto:ramyawad@aucegypt.edu"
              className="underline hover:text-[#dcbc06]"
            >
              ramyawad@aucegypt.edu
            </a>
          </p>
          <p className="text-lg mt-2">
            <strong>Ahmed Elzalabany</strong> -{" "}
            <a
              href="mailto:ahmed.elzalabany@aucegypt.edu"
              className="underline hover:text-[#dcbc06]"
            >
              aelzalabany@aucegypt.edu
            </a>
          </p>
          <p className="text-lg mt-2">
            <strong>Omar Abdelkafy</strong> -{" "}
            <a
              href="mailto:omar.abdelkafy@aucegypt.edu"
              className="underline hover:text-[#dcbc06]"
            >
              o.abdelkafy@aucegypt.edu
            </a>
          </p>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} US Immigration Guide. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
