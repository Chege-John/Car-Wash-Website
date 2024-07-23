import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="About Dency Car Wash" /> <br />
            <br />
            <Title title="Convenience at your Doorstep!" className="title-bg" />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Your Ideal Mobile Car Wash for Hassle Free Days at your Doorstep!" />
              <p className="desc-p">
                Our eco-friendly pressure washing services are transforming the
                industry and giving car washing a new, more glamorous name.
                Whether you’re at home or at work, we come to you to scrub that
                dirt clean and leave your car shining, as you go about your day.
                We take pride in professionally trained personnel who offer the
                best services in car cleaning and detailing.
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">1000+</h1>
                  <h3>Cars cleaned</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">10+</h1>
                  <h3>Industry Partners</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/Premium.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/wash.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                Our mission is simple yet impactful: to redefine car care with
                convenience, quality, and eco-conscious practices. We understand
                that your time is valuable, and finding time for traditional car
                washes can be challenging. That’s why we bring our professional
                car cleaning services directly to you, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
