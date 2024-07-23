import React from "react";
import { Title, TitleLogo } from "./common/Title";

const openWhatsApp = () => {
  // Replace with your actual WhatsApp number in international format
  const phoneNumber = "+254724849138";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="We are looking forward to serving you" /> <br />
            <TitleLogo title="Lets give your car a fresh touch" />
          </div>
          <div>
            <button className="button-primary" onClick={openWhatsApp}>
              Book a Service
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
