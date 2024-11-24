import React from "react";
import { Footer } from "flowbite-react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Footers = () => {
  return (
    <Footer container className="mt-8 xl:h-[46%] bg-black-600 text-white xl:scale-100 sm:scale-50 sm:text-center sm:h-full">
      <div className="w-full p-6 text-center">
        {/* Footer Header */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-white mb-6 animate-fade-in">
            Galexy Fabrication
          </h1>
        </div>

        {/* Footer Links and Contact Section */}
        <div className="flex flex-wrap gap-12 justify-center sm:justify-between">
          {/* About Section */}
          <div className="flex flex-col items-center sm:items-start sm:text-center  ">
            <h2 className="text-lg font-semibold mb-4 cursor-pointer">About</h2>
            <Footer.Link
              href="#"
              className="text-gray-400 hover:text-white transition-transform duration-200 list-none"
            >
              Company Info
            </Footer.Link>
            <Footer.Link
              href="#"
              className="text-gray-400 hover:text-white transition-transform duration-200 list-none"
            >
              Mission & Vision
            </Footer.Link>
          </div>

          {/* Work Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-4">Work</h2>
            {["Doors", "Gates", "Grills", "Furniture", "Shades", "Shutters", "Steps"].map(
              (item) => (
                <Footer.Link
                  href="#"
                  key={item}
                  className="text-gray-400 hover:text-white transition-transform duration-200 list-none"
                >
                  {item}
                </Footer.Link>
              )
            )}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="flex items-center mb-2">
              <FaWhatsapp className="mr-2 text-green-500" />
              <a
                href="https://wa.me/919730260479?text=Hi%20Galexy%20Fabrication%20Team!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform duration-200"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-red-500" />
              <a
                href="mailto:mosinbalsing@gmail.com"
                className="text-gray-400 hover:text-white transition-transform duration-200"
              >
                Email
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-500" />
              <span className="text-gray-400">Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>

        <Footer.Divider className="my-6 border-gray-600" />

        {/* Footer Bottom Section */}
        <div className="text-center sm:flex sm:justify-between sm:items-center">
          <Footer.Copyright
            href="#"
            by="Galexy Fabrication™"
            year={new Date().getFullYear()}
          />
          <Footer.LinkGroup className="mt-4 sm:mt-0">
            <Footer.Link
              href="#"
              className="text-gray-400 hover:text-white transition-transform duration-200"
            >
              Privacy Policy
            </Footer.Link>
            <Footer.Link
              href="#"
              className="text-gray-400 hover:text-white transition-transform duration-200"
            >
              Terms of Service
            </Footer.Link>
            <Footer.Link
              href="#"
              className="text-gray-400 hover:text-white transition-transform duration-200"
            >
              Contact Us
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
};
