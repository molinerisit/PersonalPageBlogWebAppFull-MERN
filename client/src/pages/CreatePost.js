import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const quillRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/categories");
        setCategories(response.data);
      } catch (error) {
        setErrorMessage("Error fetching categories.");
      }
    };
    fetchCategories();
  }, []);

  const handleContentChange = useCallback((value) => {
    setContent(value);
    console.log("Content changed:", value);
  }, []);

  const insertImage = useCallback((imageUrl) => {
    const editor = quillRef.current?.getEditor();
    if (editor) {
      const range = editor.getSelection();
      if (range) {
        editor.insertEmbed(range.index, "image", imageUrl);
        editor.setSelection(range.index + 1);
      } else {
        editor.focus();
      }
    } else {
      console.error("Editor no disponible para insertar imagen.");
    }
  }, []);

  const handleImageUpload = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) {
        console.error("No se seleccionó ningún archivo.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No se encontró el token en el almacenamiento local");
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/api/posts/upload-image",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const imageUrl = response.data.url;
        insertImage(imageUrl);
      } catch (error) {
        setErrorMessage("Error al subir la imagen.");
      }
    };
  }, [insertImage]);

  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ align: [] }],
        [{ color: [] }, { background: [] }], // Add color and background color options
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Category:", category);

    if (!title || !content || !category) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setErrorMessage("No se encontró el token en el almacenamiento local");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/posts",
        { title, content, category },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Response:", response.data);

      setSuccessMessage("¡Post creado con éxito!");
      setTimeout(() => navigate("/blog/posts"), 2000);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error al crear el post.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    if (!newCategory) {
      setErrorMessage("El nombre de la categoría es obligatorio.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setErrorMessage("No se encontró el token en el almacenamiento local");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/categories",
        { name: newCategory },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCategories([...categories, response.data]);
      setNewCategory("");
    } catch (error) {
      setErrorMessage("Error al crear la categoría.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Crear Post
        </h2>
        <form onSubmit={handleCreatePost} className="space-y-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            autoFocus
          />
          <div className="bg-white border border-gray-300 rounded-lg">
            <ReactQuill
              ref={quillRef}
              value={content}
              onChange={handleContentChange}
              theme="snow"
              modules={modules}
              className="min-h-[200px]"
              style={{ color: '#000', backgroundColor: '#fff' }}
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="mt-4">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Nueva categoría"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleCreateCategory}
              className={`w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-200 mt-2 ${
                loading && "opacity-50 cursor-not-allowed"
              }`}
              disabled={loading}
            >
              {loading ? "Creando categoría..." : "Agregar Categoría"}
            </button>
          </div>
          <button
            type="submit"
            className={`w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition duration-200 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Creando..." : "Crear Post"}
          </button>
        </form>
        {successMessage && (
          <p className="mt-4 text-green-600 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
