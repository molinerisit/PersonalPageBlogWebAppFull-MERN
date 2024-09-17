import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rating({ postId }) {
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/ratings/${postId}`);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error('Error fetching average rating:', error);
        setError('Error fetching ratings');
      }
    };
    fetchAverageRating();
  }, [postId]);

  const handleRating = async (value) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No estás autenticado');
        return;
      }

      await axios.post(
        'http://localhost:5000/api/ratings',
        { postId, rating: value },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setRating(value);
      setAverageRating((prevAverage) => ((prevAverage * 10) + value) / 11); // Simple average calculation
      setError('');
    } catch (error) {
      console.error('Error submitting rating:', error);
      setError('Error al registrar la valoración');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Valoraciones</h3>
      <div className="flex space-x-2 mb-4">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`px-4 py-2 rounded ${value <= rating ? 'bg-yellow-400' : 'bg-gray-200'} ${rating > 0 ? 'cursor-not-allowed' : ''}`}
            onClick={() => handleRating(value)}
            disabled={rating > 0}
            title={`Puntuación ${value}`}
          >
            {value}⭐
          </button>
        ))}
      </div>
      <p>Promedio de valoraciones: {averageRating.toFixed(1)} / 5</p>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

export default Rating;
