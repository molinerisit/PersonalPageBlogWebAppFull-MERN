import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../componentes/Rating";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("date");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        setError("Error fetching categories");
      }
    };

    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
  
      const response = await axios.get("http://localhost:5000/api/posts", {
        params: {
          category: selectedCategory,
          sortBy,
        },
      });
  
      let fetchedPosts = response.data;
  
      if (sortBy === "rating") {
        fetchedPosts = fetchedPosts.sort(
          (a, b) => (b.averageRating || 0) - (a.averageRating || 0)
        );
      } else if (sortBy === "date") {
        fetchedPosts = fetchedPosts.sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
      }
  
      setPosts(fetchedPosts);
    } catch (error) {
      setError("Error fetching posts");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, sortBy]);

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
    fetchPosts();
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat._id === categoryId);
    return category ? category.name : "Uncategorized";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-16"> {/* Ajuste aquí para evitar la superposición */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Posts
        </h2>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <label className="block text-gray-700 font-medium mb-2">
              Filter by Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap space-x-2 lg:space-x-4">
            <button
              onClick={() => handleSortChange("date")}
              className={`py-2 px-4 border rounded-lg shadow-sm transition-colors duration-300 ${
                sortBy === "date"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Sort by Date
            </button>
          <button
            onClick={() => handleSortChange("rating")}
            className={`py-2 px-4 border rounded-lg shadow-sm transition-colors duration-300 ${
              sortBy === "rating"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Sort by Rating
          </button>
        </div>
      </div>

      {error && <p className="text-center text-red-600">{error}</p>}

      {loading ? (
        <p className="text-center text-gray-600">Loading posts...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6"
          >
            <Link to={`/blog/posts/${post._id}`} className="block">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors truncate">
                {post.title}
              </h3>
              <p
                className="text-gray-700 mb-2 truncate"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content.length > 150
                      ? `${post.content.substring(0, 150)}...`
                      : post.content,
                }}
              ></p>
              <p className="text-gray-600 text-sm mb-1">
                By{" "}
                {post.author && post.author.username
                  ? post.author.username
                  : "Unknown"}
              </p>

              <p className="text-gray-400 text-xs mb-2">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : "No date available"}
              </p>
              <p className="text-gray-700 text-xs mb-1">
                <strong>Category:</strong> {getCategoryName(post.category)}
              </p>
              <p className="text-gray-700 text-xs mb-1">
                <Rating postId={post._id} />
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No posts available.</p>
      )}
    </div>  
     </div>
  );
}

export default PostList;
