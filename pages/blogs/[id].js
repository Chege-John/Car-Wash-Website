import { blogdata } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogdata.find((post) => post.id === parseInt(id));

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="Blog / JANUARY 12, 2024" /> <br />
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="img py">
              <img
                src={post.cover}
                alt={post.title}
                width="50%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="Why Choose a Mobile Car Wash? Convenience at Your Doorstep" />
              <p className="desc-p">
                {" "}
                In today's fast-paced world, time is a precious commodity.
                That's why more car owners are opting for the convenience of a
                mobile car wash service. Imagine this: instead of spending your
                Saturday waiting in line at the car wash, you can schedule a
                professional cleaning right from your phone and have it done
                while you work, shop, or relax at home.
              </p>
              <p className="desc-p">
                Our mobile car wash brings the cleaning right to your doorstep.
                Whether you're at home, at work, or even at the gym, our trained
                technicians arrive equipped with eco-friendly products and
                state-of-the-art equipment to give your car a showroom shine. No
                more wasted time sitting in a waiting area or driving across
                town – we come to you!
              </p>
              <p className="desc-p">
                Beyond convenience, we're committed to sustainability. Our
                eco-friendly cleaning products minimize environmental impact
                without compromising on quality. By choosing our mobile service,
                you're not just saving time – you're also making a greener
                choice for your vehicle and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
