import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  const getLatestArticles = async () => {
    try {
      const res = await axios.get(
        'https://api.monumaurya.com/articles?_limit=10',
      );
      // const res = await fetch('https://api.monumaurya.com/articles');
      console.log(res);
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
      alert('Something went Wrong😥😥');
    }
  };

  useEffect(() => {
    getLatestArticles();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="max-w-[1440px] container mx-auto p-5">
        {blogs.length > 0 ? (
          <div>
            {blogs.map((blog) => (
              <p key={blog.slug}>{blog.title}</p>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default Home;
