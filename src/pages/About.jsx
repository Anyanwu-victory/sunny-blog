import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import personPlaceholder from '../assets/person.jpg';
import client from '../client'; // Sanity client setup
import { fetchUser } from '../utils/fetchUser'; // Utility to fetch user data

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      fetchUser(storedUser.sub)
        .then(data => setUser(data))
        .catch(console.error);
      
      // Fetch user's articles
      client.fetch(`*[_type == "article" && author._ref == "${storedUser.sub}"]`)
        .then(data => setArticles(data))
        .catch(console.error);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="profile-page">
      <div className="profile-header bg-[#f0d829] w-full flex justify-center items-center">
        <div className="profile-info flex flex-col items-center mx-auto md:flex-row">
          <img
            src={user.image || personPlaceholder}
            alt={user.username || 'User Image'}
            className="profile-image w-24 h-24 object-cover rounded-full"
          />
          <div className="profile-details mx-5 mt-5 text-center md:mt-0 md:text-left">
            <h1 className="text-3xl font-bold text-[#3e1943]">{user.username || 'User Name'}</h1>
            <p className="text-black">{user.bio || 'Bio not available'}</p>
          </div>
        </div>
      </div>

      <div className="profile-content mx-14 mt-8 space-y-4">
        <nav className="profile-nav text-[#3e1943] font-bold space-x-4 text-center">
          <span onClick={() => setActiveSection('home')} className="cursor-pointer">Home</span>
          <span onClick={() => setActiveSection('blogs')} className="cursor-pointer">Blogs</span>
          <span onClick={() => setActiveSection('about')} className="cursor-pointer">About</span>
        </nav>

        <div className="profile-articles">
          {activeSection === 'home' && (
            <div>
              <h2 className="text-2xl font-bold">Home</h2>
              <p>Welcome to the home section. Here you can find the latest updates and news.</p>
            </div>
          )}
          {activeSection === 'blogs' && (
            <div>
              <h2 className="text-2xl font-bold">Blogs</h2>
              {articles.length > 0 ? (
                <ul>
                  {articles.map((article) => (
                    <li key={article._id} className="article-item">
                      <Link to={`/article/${article.slug.current}`}>
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No articles published yet.</p>
              )}
            </div>
          )}
          {activeSection === 'about' && (
            <div>
              <h2 className="text-2xl font-bold">About</h2>
              <p>Learn more about us and what we do.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
