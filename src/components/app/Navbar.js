import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 z-30 bg-white text-black h-[80px] shadow-md shadow-black">
        <div className="max-w-[1440px] container mx-auto px-5 flex justify-between items-center h-full">
          <div>
            <h3 className="text-2xl font-semibold bg-white border border-black hover:bg-yellow-400 px-2 py-2 rounded-xl">
              HIMANSHU BLOG
            </h3>
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-5">
              <Link
                href="/"
                className={`${
                  router.pathname == '/'
                    ? ' bg-red-600 text-white px-4 py-1 rounded-full'
                    : 'text-black bg-yellow-400 px-4 py-1 rounded-full'
                }`}
              >
                HOME
              </Link>
              <Link
                href="/blogs"
                className={`${
                  router.pathname == '/blogs'
                    ? 'text-white bg-red-600 px-4 py-1 rounded-full'
                    : 'text-black bg-yellow-400 px-4 py-1 rounded-full'
                }`}
              >
                BLOGS
              </Link>
            </div>
            <button className="bg-yellow-400 px-4 py-1 rounded-lg hover:bg-blue-700 hover:text-white">
              FACEBOOK
            </button>
            <button className="bg-yellow-400 px-4 py-1 rounded-lg hover:bg-blue-700 hover:text-white">
              TWITTER
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
