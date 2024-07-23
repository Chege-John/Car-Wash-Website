import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const openWhatsApp = () => {
  // Replace with your actual WhatsApp number in international format
  const phoneNumber = "+254724849138";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <img
                src="/images/logo-d.png"
                alt="Company Logo"
                style={{ width: "150px", height: "" }} // Inline styles for image dimensions
              />
              <br />
              <span>Monday – Saturday from 9 am to 6 pm</span>
              <br />
              <br />
              <h3>0721 922 229</h3>
              <button className="button-primary" onClick={openWhatsApp}>
                Book a Service
              </button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/team">Our team</Link>
              </li>

              <li>
                <Link href="/">Blog</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href="/">Basic Wash</Link>
              </li>
              <li>
                <Link href="/">Premium Wash</Link>
              </li>
              <li>
                <Link href="/">Buffing</Link>
              </li>
              <li>
                <Link href="/">Steam Engine</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2024 Dency Car Wash ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span> Built by Irungu.C</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
