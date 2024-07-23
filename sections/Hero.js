import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import HeroSection from "@/components/HeroSection";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero-sec contact bg-top">
        <div className="container">
          <HeroSection />
          <div className="heading-title">
            <Title title="Your Ideal Mobile Car Wash for Hassle Free Days." />
            <p>
              Our eco-friendly pressure washing services are transforming the
              industry and giving car washing a new, more glamorous name.
              Whether you’re at home or at work, we come to you to scrub that
              dirt clean and leave your car shining, as you go about your day.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/*<ShowCase /> */}
      {/*<Brand />*/}

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
