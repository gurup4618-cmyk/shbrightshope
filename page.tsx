import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Package,
  RefreshCcw,
  Truck,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
}

function Feature({ icon, title }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-4xl">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ================= HEADER SECTION ================= */}
      <section className="relative h-[150px] flex items-center overflow-hidden">
        <Image
          src="/about-header1.jpg"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative max-w-3xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300">Home / About Us</p>
          <h1 className="mt-2 text-4xl font-extrabold">About Us</h1>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              WELCOME TO BRANTASHOP <br />
              YOUR TRUSTED E-COMMERCE DESTINATION!
            </h2>

            <p className="mt-4 text-gray-700">
              At Brantashop, we are proud to be your go-to destination for a wide
              range of products. With over three years of experience, we have
              delighted 200,000+ happy customers.
            </p>

            <h3 className="mt-6 text-2xl font-bold">Our Journey</h3>

            <p className="mt-4 text-gray-600">
              Our journey began with a simple idea: making quality products
              accessible, affordable, and easy to shop.
            </p>

            <Link
              href="/"
              className="inline-block mt-6 font-medium underline"
            >
              Shop Now
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[300px]">
            <Image
              src="/about-image.jpg"
              alt="Brantashop"
              fill
              className="rounded-md object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT SECTION ================= */}
      <section className="bg-[#fbf7f1] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[300px]">
            <Image
              src="/commitment-image.jpg"
              alt="Commitment"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center px-8 py-10">
            <div>
              <h2 className="text-3xl font-bold">OUR COMMITMENT</h2>
              <p className="mt-6 text-gray-700">
                We believe in quality, convenience, and customer satisfaction.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li><strong>Quality:</strong> Carefully curated products</li>
                <li><strong>Convenience:</strong> Seamless shopping experience</li>
                <li><strong>Satisfaction:</strong> 2 lakh+ happy customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Feature icon={<MessageCircle />} title="Happy To Help" />
          <Feature icon={<Package />} title="Check Order Status" />
          <Feature icon={<RefreshCcw />} title="Easy Returns" />
          <Feature icon={<Truck />} title="Free Shipping" />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white pt-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Branta</h2>

          <div className="flex gap-3 mb-4">
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500" />
            <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
            <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500" />
          </div>

          <p className="text-sm text-gray-300 mb-2">
            Mo: +91 91570 93158
          </p>
          <p className="text-sm text-gray-300 mb-2">
            Email: info.brantashop@gmail.com
          </p>
          <p className="text-sm text-gray-400">
            (Mon to Sat 10 AM to 6 PM)
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">
            Categories
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Bracelets</li>
            <li>Necklace</li>
            <li>Chokers</li>
            <li>Rings</li>
            <li>Earrings</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/refundpolicy">Refund Policy</Link></li>
            <li><Link href="/return
            order">Return Order</Link></li>
            <li><Link href="/privacypolicy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms Of Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">
            Get The News Letter
          </h3>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-black border border-gray-400 text-white focus:outline-none mb-4"
          />

          <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-400">
        <p>
          Copyright © Brantashop 2025 | Developed By Shreeji Software
        </p>

        <div className="flex gap-2 mt-4 md:mt-0">
          <Image src="/payments/visa.png" alt="Visa" width={40} height={24} />
          <Image src="/payments/mastercard.png" alt="Mastercard" width={40} height={24} />
          <Image src="/payments/amex.png" alt="Amex" width={40} height={24} />
          <Image src="/payments/paypal.png" alt="Paypal" width={40} height={24} />
          <Image src="/payments/discover.png" alt="Discover" width={40} height={24} />
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/919157093158"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </footer>
    </>
  );
}
