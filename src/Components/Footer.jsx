import { Footer } from "flowbite-react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Footers = () => {
  return (
    <Footer container className="mt-8 bg-[#1C1C21] text-white ">
      <div className="w-full p-6 flex flex-wrap">
        {/* Footer Header */}
        <div className="w-full text-center sm:text-left mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 animate-fade-in">
            Galexy Fabrication
          </h1>
        </div>

        {/* Footer Links and Contact Section */}
        <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-12 justify-between">
          {/* About Section */}
          <div className="flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left justify-center">
            <h2 className="text-lg font-semibold mb-4">Work</h2>
            {[
              "Doors",
              "Gates",
              "Grills",
              "Furniture",
              "Shades",
              "Shutters",
              "Steps",
            ].map((item) => (
              <Footer.Link
                href="#work"
                key={item}
                className="text-gray-400 hover:text-white transition-transform duration-200 list-none"
              >
                {item}
              </Footer.Link>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center sm:items-start text-center">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <div className="flex items-center mb-2">
              <FaWhatsapp className="mr-2 text-green-500" />
              <a
                href="https://wa.me/919307150882?text=Hi%20Galexy%20Fabrication%20Team!"
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
                href="mailto:asifpatel4887@gmail.com"
                className="text-gray-400 hover:text-white transition-transform duration-200"
              >
                Email
              </a>
            </div>
            <div className="flex items-start lg:text-left lg:w-[90%]">
              <FaMapMarkerAlt className="mr-2 text-blue-500 text-2xl" />
              <span className="text-gray-400">Len No. 1 Santosh Nagar Katraj , Dattat Nagar Road , Pune 411046</span>
            </div>
          </div>
        </div>

        <Footer.Divider className="my-6 border-gray-600 w-full" />

        {/* Footer Bottom Section */}
        <div className="w-full text-center sm:flex sm:justify-between sm:items-center">
          <Footer.Copyright
            href="#"
            by="Galexy Fabrication™"
            year={new Date().getFullYear()}
            className="mb-4 sm:mb-0"
          />
          {/* <Footer.LinkGroup className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-end">
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
          </Footer.LinkGroup> */}
        </div>
      </div>
    </Footer>
  );
};