// src/Blog.js
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { LangProvider, langContext } from './context/LangContext'; // Importa el contexto
import Home from './pages/Inicio_posts';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PrivateRoute from './componentes/PrivateRoute';
import EditPost from './pages/EditPost';
import Navbar from './componentes/BlogHeader';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import './Css/GlobalBlog.css'; // Importa el archivo CSS global


function BlogContent() {
  const { locale, establecerLenguaje } = useContext(langContext); // Usa el contexto para obtener y cambiar el idioma

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Decodificar el token
          const decodedToken = jwtDecode(token);
          // Obtener los datos del usuario del backend
          const response = await axios.get('http://localhost:5000/api/users/me', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUser(response.data); // Establecer los datos del usuario
        } catch (error) {
          console.error('Error fetching user data:', error);
          localStorage.removeItem('token');
        }
      }
    };

    fetchUserData();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
      <>
      <div className="blog-container">
        <Navbar user={user} logout={logout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail user={user} />} />
            <Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
            <Route path="/posts/edit/:id" element={<EditPost />} />
          </Routes>
         
      </div>

      </>
  );
}

function Blog() {
  return (
    <LangProvider>
      <BlogContent />
    </LangProvider>
  );
}

export default Blog;
