import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "../componentes/Rating";

const PostDetail = ({ user }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(
          `Error al cargar el post: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/comments/${id}`
        );
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Error al cargar los comentarios.");
      }
    };

    fetchComments();
  }, [id]);

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No estás autenticado");
      return;
    }

    if (window.confirm("¿Estás seguro de que deseas eliminar este post?")) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Post eliminado con éxito");
        navigate("/blog/posts");
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("Error al eliminar el post");
      }
    }
  };

  const handleEdit = (postId) => {
    navigate(`blog/posts/edit/${postId}`); // Redirige a la página de edición con el ID del post
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No estás autenticado");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/comments/${id}`,
        { text: newComment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNewComment("");
      // Directly update the comments list without fetching again
      setComments([
        ...comments,
        {
          text: newComment,
          author: { username: user.username },
          createdAt: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error al agregar comentario");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <svg
          className="animate-spin h-12 w-12 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-center text-gray-500 text-lg">
          {error || "No se encontró el post o hubo un error al cargarlo."}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-16 overflow-hidden">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 overflow-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          {post.title}
        </h2>
        <div
          className="text-gray-800 mb-6 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/<img[^>]*>/g, (imgTag) => {
              return imgTag.replace(
                '>',
                ' style="display: block; margin-left: auto; margin-right: auto; max-width: 100%;" />'
              );
            })
          }}
        ></div>
        <p className="text-gray-600 text-sm">
          Por{" "}
          {post.author && post.author.username
            ? post.author.username
            : "Desconocido"}{" "}
          el{" "}
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "Fecha no disponible"}
        </p>
        {user &&
          post.author &&
          user._id &&
          post.author._id &&
          user._id.toString() === post.author._id.toString() && (
            <div className="mt-6 flex space-x-4">
              <button
             onClick={() => handleEdit(post._id)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 shadow-lg"
              >
                Editar Post
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 shadow-lg"
              >
                Eliminar Post
              </button>
            </div>
          )}
        <Rating postId={id} />
        <div className="mt-6">
          <h3 className="text-2xl font-bold mb-4">Comentarios</h3>
          <div>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              rows="4"
              placeholder="Escribe un comentario..."
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <button
              onClick={handleAddComment}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Agregar Comentario
            </button>
          </div>
          <ul className="mt-6">
            {comments.map((comment) => (
              <li
                key={comment._id}
                className="mb-4 p-4 bg-white shadow-md rounded-lg"
              >
                <p className="text-gray-800">{comment.text}</p>
                <p className="text-gray-600 text-sm">
                  Por{" "}
                  {comment.author && comment.author.username
                    ? comment.author.username
                    : "Desconocido"}{" "}
                  el{" "}
                  {comment.createdAt
                    ? new Date(comment.createdAt).toLocaleDateString()
                    : "Fecha no disponible"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
