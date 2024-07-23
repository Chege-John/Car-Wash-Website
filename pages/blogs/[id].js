import { blogdata } from "@/assets/data/dummydata";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SinglePost = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the post based on id
  const post = blogdata.find((post) => post.id === parseInt(id));

  // Handle case where post is not found
  if (!post) {
    return <div>Loading...</div>; // Or handle error state appropriately
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title={`Blog / ${post.date}`} /> <br />{" "}
            {/* Assuming post.date is available */}
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
              <TitleSm title={post.subtitle} />{" "}
              {/* Assuming post.subtitle is available */}
              {post.content.map((paragraph, index) => (
                <p key={index} className="desc-p">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
