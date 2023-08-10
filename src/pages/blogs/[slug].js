import Image from 'next/image';
import React from 'react';

const BlogDetails = ({ blog }) => {
  console.log(blog, 'hello');
  <div className="px-5 py-10 grid grid-cols-4">
    <Image src={blog.image.url} height={400} width={400} alt={blog.title} />
    <h1 className="text-xl font-semibold pb-3">{blog.title}</h1>
    <h1 className="pb-2">{blog.description}</h1>
  </div>;
};

export default BlogDetails;

export const getServerSideProps = async (context) => {
  console.log(context.query.slug);
  const res = await fetch(
    `https://api.monumaurya.com/articles/${context.query.slug}`,
  );
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};
