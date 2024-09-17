import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import 'quill-emoji/dist/quill-emoji.js';
import ImageResize from 'quill-image-resize-module-react';

// Registrar el módulo ImageResize
Quill.register('modules/imageResize', ImageResize);

function EditPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { postId } = useParams();
  const quillRef = useRef(null);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(`Fetching post with ID: ${postId}`);
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        console.log("Datos recibidos del servidor:", response.data);
        if (response.data) {
          setTitle(response.data.title || '');
          setContent(response.data.content || '');
          setCategory(response.data.category || '');
        } else {
          console.error('Post no encontrado');
          setErrorMessage('Post no encontrado.');
        }
      } catch (error) {
        console.error('Error al obtener el post:', error);
        setErrorMessage('Error al cargar los datos del post.');
      }
    };
  
    if (postId) {
      fetchPost();
    }
  }, [postId]);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        console.log(`Fetching post with ID: ${postId}`); // Log para verificar el ID del post
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`);
        console.log("Datos recibidos del servidor:", response.data); // Log para depuración

        if (response.data) {
          setTitle(response.data.title || '');
          setContent(response.data.content || '');
          setCategory(response.data.category || '');
        } else {
          console.error('Post no encontrado');
          setErrorMessage('Post no encontrado.');
        }
      } catch (error) {
        console.error('Error al obtener el post:', error);
        setErrorMessage('Error al cargar los datos del post.');
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  // Cargar las categorías disponibles
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data || []);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
        setErrorMessage('Error al cargar categorías.');
      }
    };

    fetchCategories();
  }, []);

  const handleContentChange = useCallback((value) => {
    setContent(value);
  }, []);

  const insertImage = useCallback((imageUrl) => {
    const editor = quillRef.current?.getEditor();
    if (editor) {
      const range = editor.getSelection();
      if (range) {
        editor.insertEmbed(range.index, 'image', imageUrl);
        editor.setSelection(range.index + 1);
      } else {
        editor.focus();
      }
    } else {
      console.error('Editor no disponible para insertar la imagen.');
    }
  }, []);

  const handleImageUpload = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) {
        console.error('No se seleccionó ningún archivo.');
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token no encontrado en el localStorage');
          return;
        }

        const response = await axios.post('http://localhost:5000/api/posts/upload-image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        const imageUrl = response.data.url;
        insertImage(imageUrl);
      } catch (error) {
        console.error('Error al cargar la imagen:', error.response ? error.response.data : error.message);
      }
    };
  }, [insertImage]);

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'align': [] }],
        ['link', 'image', 'video', 'emoji-toolbar'],
        ['clean'],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
    imageResize: {},
    'emoji-toolbar': true,
    'emoji-textarea': true,
    'emoji-shortname': true,
  };

  const formats = [
    'header', 'font',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet',
    'align',
    'link', 'image', 'video',
    'emoji-toolbar', 'emoji-textarea', 'emoji-shortname'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/posts/${postId}`, {
        title,
        content,
        category,
      });
      setSuccessMessage('Post actualizado exitosamente');
      navigate(`/posts/${postId}`);
    } catch (error) {
      console.error('Error al actualizar el post:', error);
      setErrorMessage('Error al actualizar el post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4">Editar Post</h1>
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-lg font-medium mb-2">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Categoría</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          >
            <option value="">Seleccionar categoría</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Contenido</label>
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={handleContentChange}
            modules={modules}
            formats={formats}
            className="h-80"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          {loading ? 'Actualizando...' : 'Actualizar Post'}
        </button>
      </form>
    </div>
  );
}

export default EditPost;
