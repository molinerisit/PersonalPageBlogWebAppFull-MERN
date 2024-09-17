import React from "react";

const Modal = ({ 
  children,
  estado, 
  cambiarEstado,
  titulo
}) => {
  return (
    <>
      {estado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => cambiarEstado(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
            {titulo && <h3 className="text-2xl font-semibold text-blue-600 mb-4">{titulo}</h3>}
            <div className="space-y-4">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
