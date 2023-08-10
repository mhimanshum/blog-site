import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Blogs({ blogs }) {
  return (
    <div className="flex justify-center">
      <div className=" grid grid-cols-4 gap-5 px-5 py-5 pt-5 ">
        {blogs.map((blog) => (
          <div key={blog.slug} className="shadow-md shadow-black text-center">
            <Image
              src={blog.image.url}
              alt={blog.title}
              height={400}
              width={400}
              className="h-52 w-72"
            />
            <div className="p-2">
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-lg font-medium hover:text-blue-400"
              >
                {blog.title}
              </Link>
              <p className="h-20 w-72  flex overflow-hidden ">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
export const getServerSideProps = async () => {
  const res = await fetch('https://api.monumaurya.com/articles?_limit=10');
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
};
