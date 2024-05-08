import React from 'react';
import Person from '../assets/img/woman2.jpg';

const Blog = () => {
  return (
    <section className="bg-slate-900 min-h-screen px-4 md:px-14 py-6">
      <h1 className="uppercase text-white text-4xl md:text-6xl tracking-widest mt-5 mb-10 text-center">
        Blogs Page
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(6).keys()].map((index) => (
          <article
            key={index}
            className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full object-cover"
                src={Person}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of
                2021 so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg"
              >
                Read more blogs
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
