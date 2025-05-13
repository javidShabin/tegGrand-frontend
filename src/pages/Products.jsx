import React, { useEffect, useState } from "react";
import { axiosInstants } from "../config/axiosInstants";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [restData, setRestData] = useState([]);
  const navigate = useNavigate()
  const getProductsList = async () => {
    try {
      const response = await axiosInstants({
        method: "GET",
        url: "/product/product_list",
      });
      setRestData(response.data.products);
    } catch (error) {}
  };

  console.log(restData, "===user");

  useEffect(() => {
    getProductsList();
  }, []);
  return (
    <div className="w-full h-[100vh] py-24 px-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Our Products
      </h1>

      {restData.length === 0 ? (
        <div className="text-center text-gray-600">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {restData.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-500 mt-1">
                  {product.description?.slice(0, 60)}...
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">
                    ₹ {product.price}
                  </span>
                  <button
                    onClick={() => {
                      navigate(`/products/${product._id}`);
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm"
                  >
                    Detials
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
