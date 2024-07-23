import Image from "next/image";
import styles from "./herosection.module.scss";
import dcar from "./dcar.png";

const openWhatsApp = () => {
  // Replace with your actual WhatsApp number in international format
  const phoneNumber = "+254724849138";
  window.open(`https://wa.me/${phoneNumber}`, "_blank");
};

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContent}>
        <h1 className={styles.mainHeading}>
          <span>Mobile Car Wash</span>
          <span className={styles.highlightedText}>Where You Are</span>
        </h1>
        <p className={styles.description}>
          We bring the car wash to you. Book online and our skilled
          professionals arrive equipped to wash and service your car right where
          it's parked.
        </p>
        <a
          href="#services"
          className={styles.ctaButton}
          style={{ width: "200px" }}
          onClick={openWhatsApp}
        >
          Book a Service
        </a>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={dcar}
          alt="Mobile Car Wash Service"
          layout="responsive"
          width={400}
          height={300}
        />
      </div>
    </section>
  );
};

export default HeroSection;
