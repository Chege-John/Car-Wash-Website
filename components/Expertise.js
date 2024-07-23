import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const openWhatsApp = () => {
  // Replace with your actual WhatsApp number in international format
  const phoneNumber = "+254724849138";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our Services" />
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card
                data={item}
                key={item.id}
                onClick={openWhatsApp}
                caption="Book Service"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
