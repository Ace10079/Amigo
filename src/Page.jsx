import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons

function Page() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state
  const cards = [
    "Amigo provides OEM and aftermarket access to world-leading high-performance automotive and industrial brands.",
    "Your market potential is global. Reach it now!",
    "Don’t let the competition take the lead in new market growth. Accelerate now. Merchlin offers an open book partnership guided by 20+ years of experience, a global network, and marketing innovation. Merchlin provides OEM and aftermarket access to world-leading high-performance automotive and industrial brands.",
    "Amigo removes the risk and simplifies the challenge of export marketing.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="font-museo">
      {/* Navbar */}
      <div className="fixed w-full top-0 bg-white shadow-md p-4 z-50">
        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="" className="h-16 w-28" />

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            {isMobileMenuOpen ? (
              <FiX
                size={30}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer"
              />
            ) : (
              <FiMenu
                size={30}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="cursor-pointer"
              />
            )}
          </div>

          {/* Navbar Links */}
          <ul className="hidden lg:flex space-x-6 text-gray-500">
            <li className="hover:text-gray-700 cursor-pointer">About Amigo</li>
            <li className="hover:text-gray-700 cursor-pointer">Product Range</li>
            <li className="hover:text-gray-700 cursor-pointer">Our Brands</li>
            <li className="hover:text-gray-700 cursor-pointer">News</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-700 cursor-pointer">
              Request Company Brochure
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden flex flex-col mt-2 space-y-2 text-gray-500">
            <li className="hover:text-gray-700 cursor-pointer">About Amigo</li>
            <li className="hover:text-gray-700 cursor-pointer">Product Range</li>
            <li className="hover:text-gray-700 cursor-pointer">Our Brands</li>
            <li className="hover:text-gray-700 cursor-pointer">News</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-700 cursor-pointer">
              Request Company Brochure
            </li>
          </ul>
        )}
      </div>

      {/* Card Carousel */}
      <div className="mt-20 flex flex-col items-center lg:p-0 p-2">
        <div className="relative w-full mt-8">
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="min-w-full p-4 bg-gradient-to-br from-green-400 via-green-500 to-green-700 text-black text-center flex justify-center items-center relative rounded-lg shadow-lg"
                >
                  <div className="absolute inset-0 bg-pattern opacity-20"></div>{" "}
                  {/* Background pattern */}
                  <h3 className="lg:text-4xl font-bold font-trebuchet z-10">
                    {card}
                  </h3>{" "}
                  {/* Text with z-index for layering */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots for Cards */}
        <div className="mt-4 flex space-x-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentCard ? "bg-green-700" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Content sections */}
      <div className="flex lg:flex-row flex-col mt-5 lg:p-10">
        <div className="lg:w-1/2 p-3">
          <p className="inline-block font-bold text-3xl font-trebuchet">
            Who we are
          </p>
          <p className="text-green-800 font-bold font-trebuchet">
            Amigo are an Export Sales & Marketing Agency
          </p>
          <p>
            Merchlin are an Export Sales & Marketing Agency By providing product
            expertise and local knowledge supported by strategic marketing and a
            dedicated senior sales team we simplify the challenge of export
            market growth.
            <br />
            Merchlin helps manufacturers to promote and realize their brand
            potential in developing export markets especially Australia, Middle
            East, Africa, and the Indian Subcontinent.
          </p>
        </div>
        <div className="flex justify-items-center lg:w-1/2 p-2">
          <div className="bg-slate-400 p-2 rounded-lg">
            <p className="text-center font-bold text-2xl underline font-trebuchet">
              Export Sales & Marketing Experience
            </p>
            <p className="text-center lg:mt-8">
              Amigo’s senior sales and marketing team provide its manufacturer
              and distributor partners with over twenty years’ experience in
              automotive and industrial equipment supply and marketing
              throughout these frontier markets.
            </p>
          </div>
        </div>
      </div>

      {/* Additional sections (What we do, How we work, Why choose Amigo) */}
      <div className="lg:p-20 bg-slate-300 lg:rounded-full lg:mt-0 mt-10">
        <p className="font-bold text-2xl mb-5">What We Do</p>
        <div className="flex lg:flex-row flex-col gap-2">
            <div>  
                <p className="font-bold text-green-800"> Export Brand Development</p>
                <p>We work with manufacturer brands to develop and implement a program to build brand awareness and understanding across the frontier regions being targeted.</p>
            </div>
            <div>  
                <p className="font-bold text-green-800"> Export Sales Management</p>
                <p>We take on the credit risk and manage distributor orders from initial receipt through to payment and delivery.</p>
            </div>
            <div>  
                <p className="font-bold text-green-800">Export Distributor Training & Support</p>
                <p>We work with distributors to ensure they have the knowledge and marketing tools necessary to sell and support our agency product ranges. This role is tailored to meet the unique requirements of the agency brand, the region and the distributor.</p>
            </div>
           
        </div>
      </div>
      <div className="lg:p-14 bg-green-500  mt-10">
        <p className="font-bold text-2xl mb-4">How We Work</p>
        <div className="flex lg:flex-row flex-col gap-2">
            <div>  
                <p className="font-bold text-black">Long Term, Open Book Partnerships</p>
                <p className="text-white">The relationships we commit to with agency brands and distributors are long term and transparent. These features are essential to be able to justify the investments being made by all parties, deliver a strategic outcome and work efficiently together. We do not want to simply manage sales but rather take responsibility for the strategic development of the brand and sales within the target export regions.</p>
            </div>
            <div>  
                <p className="font-bold text-black">Strategy and Innovation Drives Action</p>
                <p className="text-white">Our approach brings together strategic planning with coordinated on-the-ground action to ensure our brands succeed in their new markets. We are continually innovating our marketing approaches to leverage emerging digital technologies, and we tailor these efforts through our on-the-ground, real-time knowledge.</p>
            </div>
            <div>  
                <p className="font-bold text-black">A Full Service, Single Point Solution</p>
                <p className="text-white">merchlin provide a full service solution for export market development encompassing research, strategic planning, marketing and promotions implementation, distributor training and support, sales, credit and logistics management and activity analysis and reporting.</p>
            </div>
           
        </div>
      </div>
      <div className="lg:p-20 bg-black lg:rounded-full lg:mt-5 mt-10 text-white">
        <p className="font-bold text-2xl mb-5 ">Why Choose Amigo</p>
        <div className="flex lg:flex-row flex-col gap-2">
            <div>  
                <p className="font-bold text-white">A Strategic Approach to Export Market Development</p>
                <p>Amigo’s commitment and capability to strategically build brands in complex developing markets, alongside sales, stands us apart from other export sales agencies.</p>
            </div>
            <div>  
                <p className="font-bold ">Reduce Export Risk</p>
                <p>Amigo take on the complex credit and other risks associated with developing export markets.</p>
            </div>
            <div>  
                <p className="font-bold ">Faster Export Growth</p>
                <p>By delegating responsibility for export market development, manufacturer brands are able to continue to focus on where their competitive advantage lies - product innovation and manufacturing.</p>
            </div>
            <div>  
                <p className="font-bold">Product Range Synergies</p>
                <p>Distributors need more than a solid product range to compete. Amigo recognise this and provide the training and tools to help distributors get the most from the  brands we represent.</p>
            </div>
           
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-slate-100 mt-5 flex justify-center">
        <img src="/logo.png" alt="" className="w-30 h-16" />
        <div className="flex space-x-2 items-center">
          <p className="text-center">@Amigo 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
