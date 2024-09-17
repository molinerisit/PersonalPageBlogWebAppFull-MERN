import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 top-0">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/blog">MyBlog</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 transition duration-200">Home</Link>
          </li>
          <li>
            <Link to="/blog/posts" className="text-gray-700 hover:text-gray-900 transition duration-200">Posts</Link>
          </li>
          <li>
            <Link to="/blog/create" className="text-gray-700 hover:text-gray-900 transition duration-200">Create Post</Link>
          </li>
          {user ? (
            <>
              <li className="text-gray-700">
                Welcome, {user.username}
              </li>
              <li>
                <button onClick={logout} className="text-gray-700 hover:text-gray-900 transition duration-200">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/blog/login" className="text-gray-700 hover:text-gray-900 transition duration-200">Login</Link>
              </li>
              <li>
                <Link to="/blog/register" className="text-gray-700 hover:text-gray-900 transition duration-200">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
