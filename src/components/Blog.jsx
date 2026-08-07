import React from 'react';
import { Link } from 'react-router-dom';

import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const Blog = () => {
  const blogs = [
    {
      id: 'blog-1',
      slug: 'drug-de-addiction-rehabilitation',
      title: 'Drug-De Addiction & Rehabilitation',
      cat: 'Therapy',
      image: blog1
    },
    {
      id: 'blog-2',
      slug: '7-ways-to-improve-mental-health',
      title: '7 ways to improve mental health',
      cat: 'Wellness',
      image: blog2
    },
    {
      id: 'blog-3',
      slug: 'what-is-exactly-social-anxiety',
      title: 'What is exactly social anxiety?',
      cat: 'Education',
      image: blog3
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-[61.96px]">
          <h2 className="text-[28px] lg:text-[32px] font-medium text-gray-900 mb-3">
            Latest <span className="text-primary ">Articles</span>
          </h2>
          <p className="text-gray-500 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Stay informed with our latest insights on mental health, wellness tips, and professional advice from our clinical experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((b, idx) => (
            <Link to={`/events/${b.slug}`} key={idx} className="block group">
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-[30px] mb-6 overflow-hidden relative">
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover  transition-transform duration-1000 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-[10px] uppercase font-bold text-gray-900">{b.cat}</div>
              </div>
              <h3 className="text-[20px] text-gray-900 mb-3 group-hover:text-primary transition-colors">{b.title}</h3>
              <p className="text-primary font-semibold text-[14px] uppercase flex items-center gap-2">
                Read Article
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
